import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import FadeIn from './FadeIn';
import BlueprintArt from './BlueprintArt';
import JsonLd from './JsonLd';
import { breadcrumbSchema } from '@/lib/seo';

export default function PageHero({ eyebrow, title, intro, breadcrumbs = [], art, children }) {
  const trail = [{ name: 'Home', path: '/' }, ...breadcrumbs];
  return (
    <section className="blueprint-grid relative overflow-hidden bg-navy-950 text-white">
      {art && (
        <BlueprintArt
          variant={art}
          className="pointer-events-none absolute top-1/2 right-[-6%] hidden h-[115%] w-auto -translate-y-1/2 text-white/[0.09] lg:block"
        />
      )}
      <div className="container-site relative pt-10 pb-16 sm:pt-12 lg:pb-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-[0.8125rem] text-white/55">
            {trail.map((item, i) => (
              <li key={item.path} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
                {i === trail.length - 1 ? (
                  <span aria-current="page" className="text-white/85">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="hover:text-white">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="mt-10 max-w-3xl lg:mt-14">
          <FadeIn>{eyebrow && <p className="eyebrow eyebrow-light">{eyebrow}</p>}</FadeIn>
          <FadeIn delay={0.06}>
            <h1 className="mt-5 text-[2.25rem] leading-[1.08] font-extrabold text-white sm:text-5xl lg:text-[3.4rem]">
              {title}
            </h1>
          </FadeIn>
          {intro && (
            <FadeIn delay={0.12}>
              <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-white/72 sm:text-lg">{intro}</p>
            </FadeIn>
          )}
          {children && <FadeIn delay={0.18}>{children}</FadeIn>}
        </div>
      </div>
      <JsonLd data={breadcrumbSchema(trail)} />
    </section>
  );
}
