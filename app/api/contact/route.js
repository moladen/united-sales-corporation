import { NextResponse } from 'next/server';
import { validateEnquiry, serviceLabel } from '@/lib/enquiry';
import { site } from '@/lib/site';

// ---------------------------------------------------------------------------
// Enquiry form integration point.
//
// No email service was present in the project, so delivery is configured via
// environment variables (see .env.example and README.md). Configure ONE of:
//
//   A) Resend email API:  RESEND_API_KEY + CONTACT_FROM_EMAIL (+ optional CONTACT_TO_EMAIL)
//   B) Webhook:           CONTACT_WEBHOOK_URL (receives the enquiry as JSON)
//
// If neither is configured the endpoint returns 503 and the form tells the
// visitor to email or call instead — it never reports a false success.
// ---------------------------------------------------------------------------

export const runtime = 'nodejs';

const clean = (s) => String(s ?? '').trim();

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}

async function sendViaResend(enquiry) {
  const to = process.env.CONTACT_TO_EMAIL || site.contact.email;
  const rows = [
    ['Full name', enquiry.fullName],
    ['Company', enquiry.companyName || '—'],
    ['Phone', enquiry.phone],
    ['Email', enquiry.email],
    ['Service required', serviceLabel(enquiry.service)],
    ['Site location', enquiry.siteLocation],
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\nProject details:\n${enquiry.details}`;
  const html = `<table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${rows
    .map(([k, v]) => `<tr><td style="color:#555"><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
    .join('')}</table><p style="font-family:Arial,sans-serif;font-size:14px"><strong>Project details</strong><br>${escapeHtml(
    enquiry.details
  ).replace(/\n/g, '<br>')}</p>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [to],
      reply_to: enquiry.email,
      subject: `Website enquiry: ${serviceLabel(enquiry.service)} — ${enquiry.fullName}`,
      text,
      html,
    }),
  });
  return res.ok;
}

async function sendViaWebhook(enquiry) {
  const res = await fetch(process.env.CONTACT_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      ...enquiry,
      serviceLabel: serviceLabel(enquiry.service),
      submittedAt: new Date().toISOString(),
      source: 'website-contact-form',
    }),
  });
  return res.ok;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_request' }, { status: 400 });
  }

  // Honeypot: silently accept bots without forwarding.
  if (clean(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const enquiry = {
    fullName: clean(body.fullName),
    companyName: clean(body.companyName),
    phone: clean(body.phone),
    email: clean(body.email),
    service: clean(body.service),
    siteLocation: clean(body.siteLocation),
    details: clean(body.details),
  };

  const errors = validateEnquiry(enquiry);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, error: 'validation', fields: errors }, { status: 422 });
  }

  const useResend = process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL;
  const useWebhook = process.env.CONTACT_WEBHOOK_URL;

  if (!useResend && !useWebhook) {
    return NextResponse.json({ ok: false, error: 'not_configured' }, { status: 503 });
  }

  try {
    const delivered = useResend ? await sendViaResend(enquiry) : await sendViaWebhook(enquiry);
    if (!delivered) throw new Error('Delivery provider rejected the request');
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] delivery failed:', err);
    return NextResponse.json({ ok: false, error: 'delivery_failed' }, { status: 502 });
  }
}
