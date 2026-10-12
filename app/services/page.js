import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { ServiceCard } from '@/components/home/ServicesGrid';
import Process from '@/components/home/Process';
import FinalCta from '@/components/home/FinalCta';
import { services } from '@/lib/services';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Services — HVAC, Fire Protection, MEP & Maintenance',
  description:
    'Engineering and building-service capabilities from United Sales Corporation: HVAC, fire fighting, fire alarm and detection, MEP coordination, civil works, fit-outs, AMC, fire-safety consultation and project execution.',
  path: '/services',
});

const groups = [
  {
    title: 'Mechanical & comfort',
    text: 'Air-conditioning, ventilation and the coordination that lets them fit within the building.',
    slugs: ['hvac', 'mep-coordination'],
  },
  {
    title: 'Fire & life safety',
    text: 'Water-based fire protection, detection and alarm systems, and practical planning support.',
    slugs: ['fire-fighting', 'fire-alarm-detection', 'fire-safety-consultation'],
  },
  {
    title: 'Build & fit-out',
    text: 'The civil and interior works that services depend on, delivered through to handover.',
    slugs: ['civil-works', 'interiors-retail-fitouts', 'project-execution'],
  },
  {
    title: 'Operate & maintain',
    text: 'Planned upkeep so installed systems keep performing after handover.',
    slugs: ['maintenance-amc'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Engineering and Building-Service Support"
        intro="Nine connected service areas for commercial environments. Engage us for a single system, or for several coordinated together under one agreed scope."
        breadcrumbs={[{ name: 'Services', path: '/services' }]}
        art="mep"
      />

      <section aria-labelledby="service-groups" className="py-20 lg:py-28">
        <div className="container-site">
          <h2 id="service-groups" className="sr-only">
            Services by discipline
          </h2>
          <div className="space-y-16 lg:space-y-20">
            {groups.map((g) => {
              const items = g.slugs.map((slug) => services.find((s) => s.slug === slug));
              return (
                <div key={g.title} className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                  <Reveal className="lg:col-span-3">
                    <h3 className="text-2xl font-bold">{g.title}</h3>
                    <p className="mt-3 leading-relaxed">{g.text}</p>
                  </Reveal>
                  <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
                    {items.map((s) => (
                      <li key={s.slug}>
                        <Reveal className="h-full">
                          <ServiceCard service={s} index={services.indexOf(s)} headingLevel="h4" />
                        </Reveal>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="combined-heading" className="border-t border-line py-20 lg:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              id="combined-heading"
              eyebrow="Multiple requirements"
              title="One Scope, Several Systems"
              intro="Many commercial projects need HVAC, fire protection, fire alarm and civil works at the same time. Discussing them together helps identify interfaces early and keeps responsibilities clear."
            />
          </Reveal>
          <Reveal delay={0.08} className="lg:justify-self-end">
            <Button href="/contact?service=multiple#enquiry" variant="navy">
              Discuss a combined requirement
            </Button>
          </Reveal>
        </div>
      </section>

      <Process />
      <FinalCta />
    </>
  );
}
