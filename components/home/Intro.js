import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import MediaFrame from '@/components/ui/MediaFrame';
import { images } from '@/lib/images';
import { site } from '@/lib/site';

export default function Intro() {
  return (
    <section aria-labelledby="intro-heading" className="py-20 lg:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="order-2 lg:order-1 lg:col-span-5">
          <div className="relative pr-6 pb-6">
            <div aria-hidden="true" className="absolute top-6 right-0 bottom-0 left-6 border border-amber-500/60" />
            <MediaFrame
              src={images.intro.src}
              alt={images.intro.alt}
              art="mep"
              tone="light"
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="relative aspect-[4/3] border border-line"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <Reveal>
            <p className="eyebrow">Who we are</p>
            <h2 id="intro-heading" className="mt-4 text-[1.875rem] leading-[1.12] font-bold sm:text-4xl lg:text-[2.75rem]">
              Integrated Support for Commercial Projects
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="prose-body mt-6 max-w-2xl text-[1.0625rem] leading-relaxed">
            <p>
              United Sales Corporation supports engineering and building-service requirements across commercial
              environments. Our capabilities cover fire and life-safety systems, HVAC, MEP coordination, civil works,
              retail fit-outs, maintenance, and project support.
            </p>
            <p>
              Our approach focuses on understanding site requirements, coordinating technical interfaces, supporting
              execution, and organizing documentation according to the agreed scope.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <dl className="mt-8 grid max-w-xl grid-cols-2 border-y border-line">
              <div className="py-5 pr-4">
                <dt className="font-label font-semibold text-[0.7rem] tracking-[0.2em] text-muted uppercase">Established</dt>
                <dd className="mt-1.5 font-display text-2xl font-bold text-ink">{site.established}</dd>
              </div>
              <div className="border-l border-line py-5 pl-5">
                <dt className="font-label font-semibold text-[0.7rem] tracking-[0.2em] text-muted uppercase">Registered in</dt>
                <dd className="mt-1.5 font-display text-2xl font-bold text-ink">Lucknow, UP</dd>
              </div>
            </dl>
            <div className="mt-8">
              <Button href="/about" variant="navy">
                About United Sales Corporation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
