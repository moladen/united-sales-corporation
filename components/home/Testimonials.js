import Reveal from '@/components/ui/Reveal';
import TestimonialCarousel from './TestimonialCarousel';
import { getTestimonials } from '@/lib/testimonials';

// "Client Stories" — renders real testimonials from lib/testimonials.js.
// Demo entries appear only in development (with a label) and never in production.
export default function Testimonials() {
  const { items, demo } = getTestimonials();
  if (!items.length) return null;

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <div className="container-site">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Client Stories</p>
          <h2 id="testimonials-heading" className="mt-4 text-[1.875rem] leading-[1.12] font-bold sm:text-4xl lg:text-[2.75rem]">
            Don&apos;t Take Our Word <span className="text-brand-600">For It.</span>
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed">
            Feedback from clients on working with United Sales Corporation — from planning and coordination to
            installation, handover and maintenance.
          </p>
          {demo && (
            <p className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-amber-500/50 bg-amber-100 px-4 py-1.5 text-[0.8125rem] font-semibold text-amber-600">
              Demo content — visible in development only. Replace in lib/testimonials.js before launch.
            </p>
          )}
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <TestimonialCarousel items={items.map(({ quote, name, role, company, rating }) => ({ quote, name, role, company, rating }))} />
        </Reveal>
      </div>
    </section>
  );
}
