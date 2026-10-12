import { Info, Check } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { CapabilityList } from '@/components/home/ProjectExperience';
import Process from '@/components/home/Process';
import Clients from '@/components/home/Clients';
import FinalCta from '@/components/home/FinalCta';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Projects',
  description:
    'Project capabilities of United Sales Corporation across retail, food and beverage, commercial buildings, offices and facilities — HVAC, fire protection, fire alarm, MEP, civil works and maintenance.',
  path: '/projects',
});

const documentation = [
  'Coordinated or marked-up layouts reflecting installed work',
  'Testing and inspection records relevant to the agreed scope',
  'Snag lists with closure status',
  'Equipment details and maintenance information',
  'Service reports for maintenance visits',
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Supporting Diverse Commercial Project Environments"
        intro="Our services are structured around the kinds of projects commercial clients undertake — from single-system installations to coordinated fit-outs and ongoing maintenance."
        breadcrumbs={[{ name: 'Projects', path: '/projects' }]}
        art="execution"
      />

      <section aria-labelledby="capabilities-heading" className="py-20 lg:py-28">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <SectionHeading
                id="capabilities-heading"
                eyebrow="Service capabilities"
                title="Project categories we support"
                intro="Each category below describes a type of project work and the services typically involved."
              />
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-5">
              <p className="flex gap-3 border border-line bg-mist p-4 text-[0.875rem] leading-relaxed">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                These are service capabilities, not claims of specific completed projects. Verified case studies,
                with client permission, will be added to this page as they are documented.
              </p>
            </Reveal>
          </div>
          <div className="mt-12">
            <CapabilityList />
          </div>
        </div>
      </section>

      <Clients />

      <section aria-labelledby="docs-heading" className="border-t border-line py-20 lg:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              id="docs-heading"
              eyebrow="Documentation"
              title="Records that stay useful after handover"
              intro="Documentation is agreed as part of each project's scope. Depending on the work, it can include:"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="divide-y divide-line border-y border-line">
              {documentation.map((d) => (
                <li key={d} className="flex gap-3 py-4 leading-relaxed text-ink">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Process />
      <FinalCta
        title="Planning a Commercial Project?"
        text="Share your scope, drawings or site details and we will review what the project requires."
      />
    </>
  );
}
