import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import MediaFrame from '@/components/ui/MediaFrame';
import FounderProfile from '@/components/home/FounderProfile';
import WhyUs from '@/components/home/WhyUs';
import FinalCta from '@/components/home/FinalCta';
import { services } from '@/lib/services';
import { images } from '@/lib/images';
import { site } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'About Us',
  description:
    'About United Sales Corporation — established in 2019 in Lucknow by Mohd Irfan Akram, providing engineering, fire and life-safety, MEP and commercial project support.',
  path: '/about',
});

const timeline = [
  {
    label: '2019',
    title: 'Company established',
    text: 'United Sales Corporation is founded by Mohd Irfan Akram, starting with one or two project sites in HVAC and engineering work.',
  },
  {
    label: 'Growth',
    title: 'An expanding project network',
    text: 'Work grows into a project network spanning multiple parts of India, with professional relationships built across brands, businesses and companies.',
  },
  {
    label: 'Today',
    title: 'Integrated building services',
    text: 'Capabilities span HVAC, fire and life safety, MEP coordination, fit-outs, maintenance and project support for commercial environments.',
  },
  {
    label: 'Next',
    title: 'Civil works & infrastructure',
    text: 'The company is developing its civil works and broader infrastructure capabilities as part of its plans for growth.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="An Engineering Services Company Built Site by Site"
        intro={`Established in ${site.established}, United Sales Corporation supports engineering and building-service requirements across commercial environments in India.`}
        breadcrumbs={[{ name: 'About Us', path: '/about' }]}
        art="building"
      />

      <section aria-labelledby="story-heading" className="py-20 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">Our company</p>
            <h2 id="story-heading" className="mt-4 text-[1.875rem] leading-[1.12] font-bold sm:text-4xl">
              Engineering, fire &amp; life safety, MEP and commercial projects
            </h2>
            <div className="prose-body mt-6 text-[1.0625rem] leading-relaxed">
              <p>
                United Sales Corporation supports engineering and building-service requirements across commercial
                environments. Our capabilities cover fire and life-safety systems, HVAC, MEP coordination, civil works,
                retail fit-outs, maintenance, and project support.
              </p>
              <p>
                Our approach focuses on understanding site requirements, coordinating technical interfaces, supporting
                execution, and organising documentation according to the agreed scope. Because these services are
                handled together, clients can discuss several requirements with one team and keep the interfaces between
                them clearly defined.
              </p>
              <p>
                The company is registered in Lucknow, Uttar Pradesh, and has been led by its founder, Mohd Irfan Akram,
                since {site.established}.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5">
            <MediaFrame
              src={images.about.src}
              alt={images.about.alt}
              art="execution"
              tone="light"
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="aspect-[4/3] border border-line"
            />
            <dl className="mt-6 divide-y divide-line border-y border-line text-[0.9375rem]">
              {[
                ['Established', String(site.established)],
                ['Founder', site.founder.name],
                ['Registered office', 'Lucknow, Uttar Pradesh'],
                ['GSTIN', site.contact.gstin],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 py-3.5">
                  <dt className="text-muted">{k}</dt>
                  <dd className={`text-right font-semibold text-ink ${k === 'GSTIN' ? 'font-label text-[0.875rem]' : ''}`}>{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="journey-heading" className="blueprint-grid bg-navy-950 py-20 text-white lg:py-28">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow eyebrow-light">Our journey</p>
            <h2 id="journey-heading" className="mt-4 max-w-2xl text-[1.875rem] leading-[1.12] font-bold text-white sm:text-4xl">
              From humble beginnings to projects across India
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <li key={t.label} className="bg-navy-950">
                <Reveal delay={i * 0.08} className="h-full p-7 lg:pr-8">
                  <span className={`font-display text-3xl font-extrabold ${i === timeline.length - 1 ? 'text-amber-400' : 'text-white'}`}>
                    {t.label}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">{t.title}</h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-white/65">{t.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FounderProfile />
      <WhyUs />

      <section aria-labelledby="capabilities-heading" className="border-t border-line py-20 lg:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 id="capabilities-heading" className="text-[1.75rem] leading-tight font-bold sm:text-[2.1rem]">
              Our service capabilities
            </h2>
            <p className="mt-4 leading-relaxed">Explore each service area in detail.</p>
          </Reveal>
          <ul className="grid gap-x-8 sm:grid-cols-2 lg:col-span-8">
            {services.map((s) => (
              <li key={s.slug} className="border-b border-line">
                <Link href={`/services/${s.slug}`} className="group flex items-center justify-between py-4 font-semibold text-ink hover:text-brand-600">
                  {s.title}
                  <ArrowRight className="h-4 w-4 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-amber-500" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
