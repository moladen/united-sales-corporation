import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check, FileText, Phone } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import MediaFrame from '@/components/ui/MediaFrame';
import JsonLd from '@/components/ui/JsonLd';
import FinalCta from '@/components/home/FinalCta';
import { services, getService } from '@/lib/services';
import { images } from '@/lib/images';
import { site } from '@/lib/site';
import { pageMetadata, serviceSchema } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({ title: service.title, description: service.metaDescription, path: `/services/${slug}` });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const img = images.service(service.slug, service.title);
  const related = service.related.map(getService).filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow={service.title}
        title={service.headline}
        intro={service.summary}
        breadcrumbs={[
          { name: 'Services', path: '/services' },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
        art={service.art}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={`/contact?service=${service.slug}#enquiry`}>
            Request a Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Button>
          <Button href={`tel:${site.contact.phones[0].tel}`} variant="outline-light">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.contact.phones[0].display}
          </Button>
        </div>
      </PageHero>

      {/* Overview */}
      <section aria-labelledby="overview-heading" className="py-20 lg:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">Overview</p>
            <h2 id="overview-heading" className="mt-4 text-[1.75rem] leading-tight font-bold sm:text-[2.25rem]">
              {service.title} at United Sales Corporation
            </h2>
            <div className="prose-body mt-6 text-[1.0625rem] leading-relaxed">
              {service.intro.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5">
            <MediaFrame
              src={img.src}
              alt={img.alt}
              art={service.art}
              tone="light"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] border border-line"
            >
              <span className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center bg-navy-900 text-amber-400">
                <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
              </span>
            </MediaFrame>
          </Reveal>
        </div>
      </section>

      {/* Scope */}
      <section aria-labelledby="scope-heading" className="bg-mist py-20 lg:py-24">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Scope of support</p>
            <h2 id="scope-heading" className="mt-4 max-w-2xl text-[1.75rem] leading-tight font-bold sm:text-[2.25rem]">
              What this service covers
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {service.scope.map((item, i) => (
              <li key={item.title} className="bg-white">
                <Reveal delay={(i % 3) * 0.05} className="h-full p-7">
                  <span className="font-label text-[0.75rem] text-amber-600">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed">{item.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Focus + enquiry info */}
      <section aria-labelledby="focus-heading" className="py-20 lg:py-24">
        <div className="container-site grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal className="border-t-[3px] border-navy-900 pt-8">
            <h2 id="focus-heading" className="text-2xl font-bold">
              {service.focus.title}
            </h2>
            <ul className="mt-6 space-y-4">
              {service.focus.points.map((p) => (
                <li key={p} className="flex gap-3 leading-relaxed">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="blueprint-grid bg-navy-950 p-8 text-white sm:p-10">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-amber-400" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-white">Helpful information for an enquiry</h2>
            </div>
            <ul className="mt-6 space-y-3 text-white/75">
              {service.enquiryInfo.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-amber-500" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[0.875rem] text-white/50">
              Don&apos;t have everything yet? Share what you have — we can start from there.
            </p>
            <Button href={`/contact?service=${service.slug}#enquiry`} className="mt-7">
              Send an enquiry
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section aria-labelledby="related-heading" className="border-t border-line py-20 lg:py-24">
        <div className="container-site">
          <h2 id="related-heading" className="text-2xl font-bold sm:text-[1.75rem]">
            Related services
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((r) => {
              const RIcon = r.icon;
              return (
                <li key={r.slug}>
                  <Link
                    href={`/services/${r.slug}`}
                    className="group flex h-full items-start gap-4 border border-line p-6 transition-colors hover:border-navy-900"
                  >
                    <RIcon className="mt-0.5 h-6 w-6 shrink-0 text-brand-600" strokeWidth={1.6} aria-hidden="true" />
                    <span>
                      <span className="block font-display text-lg font-bold text-ink">{r.title}</span>
                      <span className="mt-1.5 line-clamp-2 block text-[0.9rem] leading-relaxed">{r.summary}</span>
                    </span>
                    <ArrowRight
                      className="mt-1 ml-auto h-4 w-4 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-amber-500"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <FinalCta />
      <JsonLd data={serviceSchema(service)} />
    </>
  );
}
