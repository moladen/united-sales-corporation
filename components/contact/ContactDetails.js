import { MapPin, Phone, Mail, FileBadge } from 'lucide-react';
import { site } from '@/lib/site';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { whatsappLink } from '@/lib/whatsapp';

function Row({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-4 border-t border-white/10 py-6 first:border-t-0 first:pt-0">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-amber-400">
        <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="font-label font-semibold text-[0.68rem] tracking-[0.2em] text-white/45 uppercase">{label}</p>
        <div className="mt-1.5 text-[0.9875rem] leading-relaxed text-white">{children}</div>
      </div>
    </div>
  );
}

export default function ContactDetails({ headingLevel = 'h3' }) {
  const { contact } = site;
  const Heading = headingLevel;
  return (
    <div className="blueprint-grid h-full bg-navy-950 p-7 text-white sm:p-9">
      <Heading className="text-[1.375rem] font-bold text-white">United Sales Corporation</Heading>
      <p className="mt-2 text-[0.9rem] text-white/60">{site.tagline}</p>

      <address className="mt-8 not-italic">
        <Row icon={MapPin} label="Registered address">
          {contact.address.lines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </Row>
        <Row icon={Phone} label="Phone">
          {contact.phones.map((p) => (
            <a key={p.tel} href={`tel:${p.tel}`} className="block hover:text-amber-400">
              {p.display}
            </a>
          ))}
        </Row>
        <Row icon={WhatsAppIcon} label="WhatsApp enquiries">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
            {contact.whatsapp.display}
          </a>
        </Row>
        <Row icon={Mail} label="Email">
          <a href={`mailto:${contact.email}`} className="break-words hover:text-amber-400">
            {contact.email}
          </a>
        </Row>
        <Row icon={FileBadge} label="GSTIN">
          <span className="font-label font-semibold tracking-[0.08em]">{contact.gstin}</span>
        </Row>
      </address>
    </div>
  );
}
