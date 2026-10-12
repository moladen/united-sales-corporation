import Link from 'next/link';
import { ArrowRight, Info } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { projectCapabilities } from '@/lib/content';

export function CapabilityList({ items = projectCapabilities, headingLevel = 'h3' }) {
  const Heading = headingLevel;
  return (
    <ol className="grid gap-px border border-line bg-line md:grid-cols-2">
      {items.map((p, i) => (
        <li key={p.title} className="bg-white">
          <Reveal delay={(i % 2) * 0.06} className="flex h-full flex-col p-6 sm:p-7 lg:p-9">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <span className="font-label font-semibold text-[0.68rem] tracking-[0.2em] text-brand-600 uppercase">
                Service capability · {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[0.8125rem] text-muted">{p.environment}</span>
            </div>
            <Heading className="mt-5 text-[1.3rem] font-bold">{p.title}</Heading>
            <p className="mt-3 flex-1 leading-relaxed">{p.text}</p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Services involved">
              {p.services.map((s) => (
                <li key={s} className="bg-mist px-2.5 py-1 text-[0.8125rem] font-medium text-navy-700">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

export default function ProjectExperience() {
  return (
    <section aria-labelledby="projects-heading" className="py-16 sm:py-20 lg:py-28">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              id="projects-heading"
              eyebrow="Project experience"
              title="Supporting Diverse Commercial Project Environments"
              intro="The categories below describe the kinds of project work our services are structured to support across commercial environments."
            />
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5">
            <p className="flex gap-3 border border-line bg-mist p-4 text-[0.875rem] leading-relaxed">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
              These are service capabilities, not a list of specific completed projects. Verified project references
              and case studies will be published as they are documented.
            </p>
          </Reveal>
        </div>

        <div className="mt-12">
          <CapabilityList />
        </div>

        <Reveal className="mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 py-1.5 text-[0.9375rem] font-semibold text-brand-600 hover:text-brand-700"
          >
            How we approach project work <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
