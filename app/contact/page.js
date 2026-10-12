import { Mail, Phone } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import ContactForm from '@/components/contact/ContactForm';
import { emailCopyEnabled } from '@/lib/delivery';
import ContactDetails from '@/components/contact/ContactDetails';
import { site } from '@/lib/site';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { whatsappLink } from '@/lib/whatsapp';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Contact Us & Request a Quote',
  description:
    'Contact United Sales Corporation, Lucknow, for HVAC, fire fighting, fire alarm, MEP, civil works, fit-out and maintenance enquiries. Call +91 89319 93806 or email united.sales.mep@gmail.com.',
  path: '/contact',
});

const nextSteps = [
  { title: 'We review your enquiry', text: 'Your requirement, site location and any information you have shared.' },
  { title: 'We clarify the scope', text: 'We may ask for drawings, photographs or a site visit to understand the work.' },
  { title: 'We respond with next steps', text: 'Based on the agreed scope — including a quotation where appropriate.' },
];

export default function ContactPage() {
  const [primary] = site.contact.phones;
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a Quote or Discuss a Requirement"
        intro="Share your project scope, facility requirements, or maintenance needs so our team can understand the work involved."
        breadcrumbs={[{ name: 'Contact', path: '/contact' }]}
        art="consult"
      >
        <div className="mt-8 flex flex-col gap-4 text-[0.9375rem] sm:flex-row sm:flex-wrap sm:gap-x-8">
          <a href={`tel:${primary.tel}`} className="inline-flex items-center gap-2.5 py-1 text-white hover:text-amber-400">
            <Phone className="h-4 w-4 text-amber-400" aria-hidden="true" />
            {primary.display}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 py-1 text-white hover:text-amber-400"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            WhatsApp {site.contact.whatsapp.display}
          </a>
          <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-2.5 py-1 break-words text-white hover:text-amber-400">
            <Mail className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
            {site.contact.email}
          </a>
        </div>
      </PageHero>

      <section id="enquiry" aria-labelledby="enquiry-heading" className="bg-mist py-16 lg:py-24">
        <div className="container-site grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <h2 id="enquiry-heading" className="mb-6 text-[1.75rem] font-bold sm:text-[2rem]">
              Enquiry form
            </h2>
            <ContactForm idPrefix="enquiry" emailCopy={emailCopyEnabled()} />
          </div>
          <div className="lg:col-span-4 lg:pt-[4.1rem]">
            <ContactDetails headingLevel="h2" />
          </div>
        </div>
      </section>

      <section aria-labelledby="next-heading" className="py-16 sm:py-20 lg:py-24">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">After you get in touch</p>
            <h2 id="next-heading" className="mt-4 text-[1.75rem] font-bold sm:text-[2.1rem]">
              What happens next
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-px border border-line bg-line md:grid-cols-3">
            {nextSteps.map((s, i) => (
              <li key={s.title} className="bg-white">
                <Reveal delay={i * 0.06} className="h-full p-7">
                  <span className="font-label text-[0.75rem] text-amber-600">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
