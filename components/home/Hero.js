import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/ui/FadeIn';
import MediaFrame from '@/components/ui/MediaFrame';
import { images } from '@/lib/images';
import { site } from '@/lib/site';

const disciplines = ['HVAC', 'Fire Fighting', 'Fire Alarm', 'MEP', 'Civil Works', 'Fit-Outs', 'AMC'];

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="blueprint-grid relative overflow-hidden bg-navy-950 text-white">
      {/* soft directional light, kept subtle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_85%_10%,rgb(5_185_250/0.16),transparent_60%)]"
      />
      <div className="container-site relative grid items-center gap-12 pt-14 pb-16 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:pt-24 lg:pb-24">
        <div className="lg:col-span-7">
          <FadeIn>
            <p className="eyebrow eyebrow-light">Established {site.established} · Lucknow, India</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1
              id="hero-heading"
              className="mt-6 text-[2.35rem] leading-[1.06] font-extrabold text-white sm:text-5xl lg:text-[3.6rem] xl:text-[4rem]"
            >
              Engineering Solutions for Commercial Spaces That <span className="text-flame">Demand More.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-white/75 sm:text-lg">
              United Sales Corporation delivers integrated engineering and building-service support across HVAC, fire
              protection, fire alarm systems, MEP coordination, civil works, retail fit-outs, and maintenance.
            </p>
          </FadeIn>
          <FadeIn delay={0.24} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact#enquiry">
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Button>
            <Button href="/services" variant="outline-light">
              Explore Our Services
            </Button>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="lg:col-span-5">
          <div className="relative">
            {/* drafting corner marks */}
            <span aria-hidden="true" className="absolute -top-2 -left-2 h-6 w-6 border-t-2 border-l-2 border-amber-500" />
            <span aria-hidden="true" className="absolute -right-2 -bottom-2 h-6 w-6 border-r-2 border-b-2 border-amber-500" />
            <MediaFrame
              src={images.hero.src}
              alt={images.hero.alt}
              art="building"
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] border border-white/10 bg-navy-900/80 lg:aspect-[5/6]"
            >
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/95 to-navy-950/0 p-5 pt-16">
                <p className="font-label font-semibold text-[0.68rem] tracking-[0.2em] text-white/50 uppercase">Building services</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {disciplines.map((d) => (
                    <li
                      key={d}
                      className="border border-white/15 bg-navy-950/60 px-2.5 py-1 text-[0.75rem] font-medium text-white/85"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </MediaFrame>
          </div>
        </FadeIn>
      </div>

      <div className="relative border-t border-white/10">
        <ul className="container-site grid grid-cols-2 lg:grid-cols-4" aria-label="Business focus">
          {site.focusAreas.map((area, i) => (
            <li
              key={area}
              className={`flex items-center gap-3 py-5 text-[0.8125rem] font-semibold tracking-[0.08em] text-white/80 uppercase sm:text-[0.875rem] ${
                i % 2 === 1 ? 'pl-4 sm:pl-6' : ''
              } ${i > 0 ? 'lg:border-l lg:border-white/10 lg:pl-6' : ''} ${i < 2 ? 'border-b border-white/10 lg:border-b-0' : ''}`}
            >
              <span className="h-1.5 w-1.5 shrink-0 bg-amber-500" aria-hidden="true" />
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
