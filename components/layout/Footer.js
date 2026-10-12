import Link from 'next/link';
import { Phone, Mail, MapPin, FileBadge } from 'lucide-react';
import { site } from '@/lib/site';
import { services } from '@/lib/services';
import { industries } from '@/lib/content';
import Logo from './Logo';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { whatsappLink } from '@/lib/whatsapp';
import CurrentYear from './CurrentYear';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
  { href: '/contact#enquiry', label: 'Request a Quote' },
];

function FooterHeading({ children }) {
  return <h2 className="font-label text-[0.7rem] font-semibold tracking-[0.2em] text-amber-400 uppercase">{children}</h2>;
}

export default function Footer() {
  const { contact } = site;

  return (
    <footer className="blueprint-grid bg-navy-950 text-white/70">
      <div aria-hidden="true" className="rule-droplet h-1" />
      <div className="container-site pt-16 pb-10 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed">
              Integrated engineering and building-service support for commercial environments — HVAC, fire and life
              safety, MEP coordination, civil works, fit-outs and maintenance. Established {site.established}.
            </p>
            <p className="mt-6 font-label font-semibold text-[0.7rem] tracking-[0.2em] text-white/45 uppercase">{site.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-5">
            <nav aria-label="Quick links">
              <FooterHeading>Quick links</FooterHeading>
              <ul className="mt-4 space-y-1 text-[0.9rem]">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-block py-1.5 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Services" className="order-last col-span-2 sm:order-none sm:col-span-1">
              <FooterHeading>Services</FooterHeading>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1 text-[0.9rem] sm:block sm:space-y-1">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="inline-block py-1.5 transition-colors hover:text-white">
                      {s.navTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Industries">
              <FooterHeading>Industries</FooterHeading>
              <ul className="mt-4 space-y-1 text-[0.9rem]">
                {industries.map((i) => (
                  <li key={i.slug}>
                    <Link href={`/industries#${i.slug}`} className="inline-block py-1.5 transition-colors hover:text-white">
                      {i.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-3">
            <FooterHeading>Contact</FooterHeading>
            <address className="mt-5 space-y-4 text-[0.9rem] not-italic">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                <span>
                  <span className="sr-only">Registered address: </span>
                  {contact.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </p>
              {contact.phones.map((p) => (
                <p key={p.tel} className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                  <a href={`tel:${p.tel}`} className="hover:text-white">
                    {p.display}
                  </a>
                </p>
              ))}
              <p className="flex gap-3">
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" />
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  WhatsApp: {contact.whatsapp.display}
                </a>
              </p>
              <p className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                <a href={`mailto:${contact.email}`} className="break-words hover:text-white">
                  {contact.email}
                </a>
              </p>
              <p className="flex gap-3">
                <FileBadge className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                <span>
                  GSTIN: <span className="font-label text-white/85">{contact.gstin}</span>
                </span>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-[0.8125rem] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {site.name}. All rights reserved.
          </p>
          <Link href="/privacy-policy" className="inline-block py-2 hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
