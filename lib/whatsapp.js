import { site } from './site';
import { serviceLabel } from './enquiry';

// Builds a click-to-chat link. Opens WhatsApp (app on mobile, WhatsApp Web
// on desktop) with the message pre-typed; the visitor then taps Send.
export function whatsappLink(text = site.contact.whatsapp.greeting) {
  return `https://wa.me/${site.contact.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

// Formats an enquiry-form submission as a WhatsApp message.
export function enquiryMessage(v) {
  const lines = [
    '*New website enquiry — United Sales Corporation*',
    '',
    `*Name:* ${v.fullName.trim()}`,
    v.companyName.trim() ? `*Company:* ${v.companyName.trim()}` : null,
    `*Phone:* ${v.phone.trim()}`,
    `*Email:* ${v.email.trim()}`,
    `*Service required:* ${serviceLabel(v.service)}`,
    `*Site location:* ${v.siteLocation.trim()}`,
    '',
    '*Project details:*',
    v.details.trim(),
  ];
  return lines.filter((l) => l !== null).join('\n');
}
