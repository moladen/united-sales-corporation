import 'server-only';

// True when an email/webhook provider is configured for /api/contact.
// Read at build/render time; set the env vars before building.
export function emailCopyEnabled() {
  return Boolean((process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL) || process.env.CONTACT_WEBHOOK_URL);
}
