import { Plus } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { faqs } from '@/lib/content';
import { site } from '@/lib/site';

// Native <details> accordion: keyboard accessible and works without JavaScript.
export default function Faq() {
  return (
    <section aria-labelledby="faq-heading" className="py-20 lg:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-heading" className="mt-4 text-[1.875rem] leading-[1.12] font-bold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 leading-relaxed">
            Can&apos;t find what you&apos;re looking for? Email{' '}
            <a href={`mailto:${site.contact.email}`} className="font-medium break-all text-brand-600 hover:underline">
              {site.contact.email}
            </a>{' '}
            or call{' '}
            <a href={`tel:${site.contact.phones[0].tel}`} className="font-medium whitespace-nowrap text-brand-600 hover:underline">
              {site.contact.phones[0].display}
            </a>
            .
          </p>
        </Reveal>

        <div className="border-t border-line lg:col-span-8">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
                <span className="font-display text-[1.0625rem] leading-snug font-semibold text-ink sm:text-lg">{f.q}</span>
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-line text-brand-600 transition-colors group-open:border-amber-500 group-open:bg-amber-500 group-open:text-navy-950">
                  <Plus className="h-4 w-4 transition-transform duration-200 group-open:rotate-45" aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-2xl pb-7 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
