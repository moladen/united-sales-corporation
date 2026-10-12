import { ArrowRight, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/lib/site';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { whatsappLink } from '@/lib/whatsapp';

export default function FinalCta({
  title = 'Let’s Discuss Your Next Engineering Requirement.',
  text = 'Share your project scope, facility requirements, or maintenance needs so our team can understand the work involved.',
}) {
  return (
    <section aria-labelledby="final-cta-heading" className="blueprint-grid relative overflow-hidden bg-navy-900 py-20 text-white lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_90%_at_100%_0%,rgb(229_138_31/0.14),transparent_60%)]"
      />
      <div className="container-site relative grid gap-10 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-8">
          <h2 id="final-cta-heading" className="text-[2rem] leading-[1.1] font-extrabold text-white sm:text-[2.6rem] lg:text-[3.1rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-white/70">{text}</p>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
          <Button href="/contact#enquiry">
            Request a Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Button>
          <Button href={`tel:${site.contact.phones[0].tel}`} variant="outline-light">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Our Team
          </Button>
          <Button href={whatsappLink()} variant="outline-light" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            WhatsApp Us
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
