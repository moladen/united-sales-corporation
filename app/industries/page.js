import Link from 'next/link';
import { ArrowUpRight, Info } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import FinalCta from '@/components/home/FinalCta';
import { industries } from '@/lib/content';
import { getService } from '@/lib/services';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Industries',
  description:
    'Commercial environments supported by United Sales Corporation — retail and fashion, food and beverage, malls and commercial buildings, entertainment and leisure, offices, and facilities maintenance.',
  path: '/industries',
});

// Relevant services for each sector (links to service pages).
const relevantServices = {
  'retail-fashion': ['interiors-retail-fitouts', 'hvac', 'fire-fighting', 'fire-alarm-detection'],
  'food-beverage': ['hvac', 'fire-fighting', 'interiors-retail-fitouts', 'maintenance-amc'],
  'malls-commercial': ['fire-fighting', 'fire-alarm-detection', 'mep-coordination', 'project-execution'],
  'entertainment-leisure': ['hvac', 'fire-alarm-detection', 'fire-safety-consultation', 'maintenance-amc'],
  'offices-commercial': ['hvac', 'mep-coordination', 'civil-works', 'interiors-retail-fitouts'],
  'facilities-maintenance': ['maintenance-amc', 'fire-safety-consultation', 'hvac', 'fire-alarm-detection'],
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built Around the Needs of Commercial Environments"
        intro="Each type of commercial space places different demands on its building services. These are the sectors our capabilities are suited to support."
        breadcrumbs={[{ name: 'Industries', path: '/industries' }]}
        art="interiors"
      />

      <section aria-label="Industry sectors" className="py-16 lg:py-24">
        <div className="container-site">
          <p className="flex max-w-3xl gap-3 border border-line bg-mist p-4 text-[0.875rem] leading-relaxed">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
            Sectors are listed to describe relevant environments for our services. They are not a list of clients or
            completed projects.
          </p>

          <div className="mt-12 divide-y divide-line border-y border-line">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              const rel = (relevantServices[ind.slug] || []).map(getService).filter(Boolean);
              return (
                <article key={ind.slug} id={ind.slug} className="grid gap-8 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
                  <Reveal className="lg:col-span-5">
                    <div className="flex items-center gap-4">
                      <span className="flex h-14 w-14 items-center justify-center bg-navy-900 text-amber-400">
                        <Icon className="h-7 w-7" strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <span className="font-label text-[0.75rem] text-muted">{String(i + 1).padStart(2, '0')} / 06</span>
                    </div>
                    <h2 className="mt-6 text-[1.75rem] leading-tight font-bold sm:text-[2rem]">{ind.title}</h2>
                    <p className="mt-4 text-[1.0625rem] leading-relaxed">{ind.text}</p>
                  </Reveal>
                  <Reveal delay={0.08} className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
                    <div>
                      <h3 className="font-label text-[0.7rem] font-semibold tracking-[0.2em] text-brand-600 uppercase">
                        Typical requirements
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {ind.needs.map((n) => (
                          <li key={n} className="flex gap-3 leading-relaxed text-ink">
                            <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-amber-500" />
                            {n}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-label text-[0.7rem] font-semibold tracking-[0.2em] text-brand-600 uppercase">
                        Relevant services
                      </h3>
                      <ul className="mt-4 divide-y divide-line border-y border-line">
                        {rel.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services/${s.slug}`}
                              className="group flex items-center justify-between gap-3 py-3 text-[0.9375rem] font-medium text-ink hover:text-brand-600"
                            >
                              {s.title}
                              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted group-hover:text-amber-500" aria-hidden="true" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCta
        title="Working in One of These Environments?"
        text="Tell us about your premises and the services involved, and we will help you understand the work required."
      />
    </>
  );
}
