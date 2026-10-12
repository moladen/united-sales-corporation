// Shared enquiry-form schema and validation (used by the client form
// and re-run on the server in app/api/contact/route.js).

import { services } from './services';

export const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: 'multiple', label: 'Multiple services' },
  { value: 'other', label: 'Other / not sure' },
];

export const emptyEnquiry = {
  fullName: '',
  companyName: '',
  phone: '',
  email: '',
  service: '',
  siteLocation: '',
  details: '',
  website: '', // honeypot — must stay empty
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Accepts Indian and international formats: digits, spaces, +, -, (), 8–15 digits total.
const PHONE_RE = /^\+?[\d\s()-]{8,20}$/;

export function validateEnquiry(values) {
  const errors = {};
  const v = (k) => String(values[k] ?? '').trim();

  if (v('fullName').length < 2) errors.fullName = 'Please enter your full name.';
  else if (v('fullName').length > 100) errors.fullName = 'Name must be under 100 characters.';

  if (v('companyName').length > 120) errors.companyName = 'Company name must be under 120 characters.';

  const digits = v('phone').replace(/\D/g, '');
  if (!v('phone')) errors.phone = 'Please enter a phone number.';
  else if (!PHONE_RE.test(v('phone')) || digits.length < 8 || digits.length > 15)
    errors.phone = 'Please enter a valid phone number, e.g. +91 98765 43210.';

  if (!v('email')) errors.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(v('email')) || v('email').length > 160) errors.email = 'Please enter a valid email address.';

  if (!v('service')) errors.service = 'Please select the service you require.';
  else if (!serviceOptions.some((o) => o.value === v('service'))) errors.service = 'Please select a service from the list.';

  if (v('siteLocation').length < 2) errors.siteLocation = 'Please enter the site location (city or area).';
  else if (v('siteLocation').length > 160) errors.siteLocation = 'Site location must be under 160 characters.';

  if (v('details').length < 20) errors.details = 'Please describe the project in at least 20 characters.';
  else if (v('details').length > 4000) errors.details = 'Project details must be under 4,000 characters.';

  return errors;
}

export function serviceLabel(value) {
  return serviceOptions.find((o) => o.value === value)?.label || value;
}
