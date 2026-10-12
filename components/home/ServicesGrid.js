import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { services } from '@/lib/services';

export function ServiceCard({ service, index, headingLevel = 'h3' }) {
  const Icon = service.icon;
  const Heading = headingLevel;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col bg-white p-7 transition-colors duration-300 hover:bg-navy-950 lg:p-8"
    >
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 h-[3px] w-0 bg-amber-500 transition-all duration-300 group-hover:w-full"
      />
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center border border-line text-brand-600 transition-colors group-hover:border-white/20 group-hover:text-amber-400">
          <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
        </span>
        <span className="font-label text-[0.75rem] text-muted group-hover:text-white/40">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <Heading className="mt-7 text-[1.2rem] leading-snug font-bold transition-colors group-hover:text-white">
        {service.title}
      </Heading>
      <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-body transition-colors group-hover:text-white/70">
        {service.summary}
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-brand-600 transition-colors group-hover:text-amber-400">
        View service
        <ArrowUpRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
        <span className="sr-only">: {service.title}</span>
      </span>
    </Link>
  );
}

export default function ServicesGrid() {
  return (
    <section aria-labelledby="services-heading" className="bg-mist py-20 lg:py-28">
      <div className="container-site">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Core services"
              id="services-heading"
              title="Engineering and Building-Service Capabilities"
              intro="Nine connected service areas, scoped to each project’s requirements and coordinated as one package where needed."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brand-600 hover:text-brand-700"
            >
              All services overview <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <ServiceCard service={s} index={i} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
