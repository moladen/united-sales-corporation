'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AlertCircle, ExternalLink, MessageCircleMore } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { emptyEnquiry, serviceOptions, validateEnquiry } from '@/lib/enquiry';
import { enquiryMessage, whatsappLink } from '@/lib/whatsapp';
import { site } from '@/lib/site';

const inputBase =
  'mt-2 block w-full rounded-[3px] border bg-white px-4 py-3 text-[0.9375rem] text-ink placeholder:text-muted/70 transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15 focus:outline-none';

function Field({ id, label, required, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-[0.875rem] font-semibold text-ink">
        {label}
        {required ? (
          <span className="text-amber-600" aria-hidden="true">
            {' '}
            *
          </span>
        ) : (
          <span className="font-normal text-muted"> (optional)</span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-[0.8125rem] text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-[0.8125rem] font-medium text-red-700">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

// Enquiries are delivered via WhatsApp: on submit, WhatsApp opens with the
// enquiry pre-typed to the company's WhatsApp number, and the visitor taps
// Send. If an email/webhook provider is configured (see app/api/contact),
// a copy is also delivered there in the background.
export default function ContactForm({ idPrefix = 'enquiry', emailCopy = false }) {
  const [values, setValues] = useState(emptyEnquiry);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | opened
  const [waUrl, setWaUrl] = useState('');
  const statusRef = useRef(null);
  const formRef = useRef(null);
  const { whatsapp } = site.contact;

  // Pre-select a service from ?service=<slug> (used by service-page CTAs).
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get('service');
    if (param && serviceOptions.some((o) => o.value === param)) {
      setValues((v) => ({ ...v, service: param }));
    }
  }, []);

  useEffect(() => {
    if (status === 'opened') statusRef.current?.focus();
  }, [status]);

  const id = (name) => `${idPrefix}-${name}`;

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const onBlur = (e) => {
    const { name } = e.target;
    const fieldError = validateEnquiry(values)[name];
    if (fieldError && String(values[name]).trim() !== '') setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (values.website) return; // honeypot

    const found = validateEnquiry(values);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      formRef.current?.querySelector(`[name="${first}"]`)?.focus();
      return;
    }

    const url = whatsappLink(enquiryMessage(values));
    setWaUrl(url);

    // Must open synchronously inside the submit handler to avoid popup blockers.
    const win = window.open(url, '_blank');
    if (win) win.opener = null;
    else window.location.href = url;

    setStatus('opened');

    // Optional copy to email/webhook — only when a provider is configured.
    if (!emailCopy) return;
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
      keepalive: true,
    }).catch(() => {});
  };

  const describedBy = (name, hasHint) =>
    errors[name] ? `${id(name)}-error` : hasHint ? `${id(name)}-hint` : undefined;

  const inputProps = (name, hasHint = false) => ({
    id: id(name),
    name,
    value: values[name],
    onChange,
    onBlur,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': describedBy(name, hasHint),
    className: `${inputBase} ${errors[name] ? 'border-red-600' : 'border-line'}`,
  });

  if (status === 'opened') {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="flex flex-col items-start border border-line bg-white p-8 focus:outline-none sm:p-10"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white">
          <WhatsAppIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-2xl font-bold">One last step — tap Send in WhatsApp</h3>
        <p className="mt-3 max-w-lg leading-relaxed">
          WhatsApp has opened with your enquiry ready to send to our team on{' '}
          <strong className="whitespace-nowrap text-ink">{whatsapp.display}</strong>. Your enquiry reaches us once you
          press <strong className="text-ink">Send</strong> in WhatsApp.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-[#25D366] px-5 py-3 font-semibold text-navy-950 transition-colors hover:bg-[#1fbe5a]"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            WhatsApp didn&apos;t open? Open it again
          </a>
          <button
            type="button"
            onClick={() => {
              setValues(emptyEnquiry);
              setStatus('idle');
            }}
            className="inline-flex items-center justify-center rounded-[3px] border border-line px-5 py-3 font-semibold text-ink hover:border-navy-900"
          >
            Start a new enquiry
          </button>
        </div>
        <p className="mt-6 text-[0.875rem] text-muted">
          Prefer another way? Call{' '}
          <a href={`tel:${site.contact.phones[0].tel}`} className="font-medium whitespace-nowrap text-brand-600 hover:underline">
            {site.contact.phones[0].display}
          </a>{' '}
          or email{' '}
          <a href={`mailto:${site.contact.email}`} className="font-medium break-words text-brand-600 hover:underline">
            {site.contact.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="relative border border-line bg-white p-6 sm:p-8 lg:p-10">
      <p className="mb-8 flex items-start gap-3 border-l-4 border-[#25D366] bg-[#25D366]/8 p-4 text-[0.9rem] leading-relaxed text-ink">
        <MessageCircleMore className="mt-0.5 h-5 w-5 shrink-0 text-[#128C7E]" aria-hidden="true" />
        <span>
          Your enquiry will open in <strong>WhatsApp</strong>, ready to send to our team on{' '}
          <strong className="whitespace-nowrap">{whatsapp.display}</strong>.
        </span>
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={id('fullName')} label="Full Name" required error={errors.fullName}>
          <input type="text" autoComplete="name" {...inputProps('fullName')} />
        </Field>
        <Field id={id('companyName')} label="Company Name" error={errors.companyName}>
          <input type="text" autoComplete="organization" {...inputProps('companyName')} />
        </Field>
        <Field id={id('phone')} label="Phone Number" required error={errors.phone}>
          <input type="tel" autoComplete="tel" inputMode="tel" placeholder="+91" {...inputProps('phone')} />
        </Field>
        <Field id={id('email')} label="Email" required error={errors.email}>
          <input type="email" autoComplete="email" {...inputProps('email')} />
        </Field>
        <Field id={id('service')} label="Service Required" required error={errors.service}>
          <select {...inputProps('service')}>
            <option value="">Select a service</option>
            {serviceOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>
        <Field id={id('siteLocation')} label="Site Location" required error={errors.siteLocation}>
          <input type="text" autoComplete="address-level2" placeholder="City or area" {...inputProps('siteLocation')} />
        </Field>
        <div className="sm:col-span-2">
          <Field
            id={id('details')}
            label="Project Details"
            required
            error={errors.details}
            hint="Type of premises, approximate area or equipment, drawings available, and expected timing."
          >
            <textarea rows={6} {...inputProps('details', true)} className={`${inputProps('details').className} resize-y`} />
          </Field>
        </div>
      </div>

      {/* Honeypot field — hidden from people, often filled by bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={id('website')}>Leave this field empty</label>
        <input id={id('website')} name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={onChange} />
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.8125rem] leading-relaxed text-muted">
          By submitting, you agree to our handling of your details as described in the{' '}
          <Link href="/privacy-policy" className="underline hover:text-brand-600">
            Privacy Policy
          </Link>
          .
        </p>
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-[3px] bg-[#25D366] px-6 py-3.5 font-semibold text-navy-950 transition-colors hover:bg-[#1fbe5a]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Send Enquiry on WhatsApp
        </button>
      </div>
    </form>
  );
}
