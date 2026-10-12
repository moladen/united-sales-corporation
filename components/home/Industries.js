import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { industries } from '@/lib/content';

export default function Industries() {
  return (
    <section aria-labelledby="industries-heading" className="blueprint-grid bg-navy-950 py-20 text-white lg:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-36">
            <Reveal>
              <SectionHeading
                id="industries-heading"
                eyebrow="Industries"
                title="Built Around the Needs of Commercial Environments"
                intro="Commercial spaces differ in how they are used, occupied and maintained. These are the environments our services are suited to support."
                light
              />
              <p className="mt-6 border-l-2 border-amber-500 pl-4 text-[0.8125rem] leading-relaxed text-white/50">
                Sectors are shown to describe relevant environments, not as a list of clients.
              </p>
              <Link
                href="/industries"
                className="mt-8 inline-flex items-center gap-2 py-1.5 text-[0.9375rem] font-semibold text-amber-400 hover:text-amber-500"
              >
                Explore industries <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>

        <ul className="border-t border-white/10 lg:col-span-8">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <li key={ind.slug} className="border-b border-white/10">
                <Reveal delay={0.04} className="group grid gap-5 py-8 sm:grid-cols-[auto_1fr] sm:gap-8">
                  <div className="flex items-center gap-4 sm:flex-col sm:items-start">
                    <span className="font-label text-[0.75rem] text-white/35">{String(i + 1).padStart(2, '0')}</span>
                    <span className="flex h-12 w-12 items-center justify-center border border-white/15 text-amber-400 transition-colors group-hover:border-amber-500/70">
                      <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white sm:text-[1.375rem]">{ind.title}</h3>
                    <p className="mt-2.5 max-w-xl leading-relaxed text-white/65">{ind.text}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {ind.needs.map((n) => (
                        <li key={n} className="border border-white/10 px-2.5 py-1 text-[0.8125rem] text-white/70">
                          {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
