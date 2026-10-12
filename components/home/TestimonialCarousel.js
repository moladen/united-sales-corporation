'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

function initials(name) {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function Card({ t, index }) {
  return (
    <figure className="relative flex h-full flex-col overflow-hidden rounded-[6px] border border-line bg-white p-7 shadow-[0_10px_30px_-18px_rgb(2_37_89/0.35)] sm:p-8">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-brand-50"
      />
      <div className="relative flex items-start justify-between">
        <Quote className="h-8 w-8 fill-brand-600 text-brand-600" aria-hidden="true" />
        {t.rating ? (
          <span className="flex gap-0.5" role="img" aria-label={`Rated ${t.rating} out of 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < t.rating ? 'fill-amber-500 text-amber-500' : 'text-line'}`}
                aria-hidden="true"
              />
            ))}
          </span>
        ) : null}
      </div>

      <blockquote className="relative mt-6 flex-1 text-[0.98rem] leading-relaxed text-body">
        <p>{t.quote}</p>
      </blockquote>

      <figcaption className="mt-7 flex items-center gap-3.5 border-t border-line pt-6">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-navy-700 to-brand-600 font-display text-[0.85rem] font-bold text-white">
          {initials(t.name)}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-display font-bold text-ink">{t.name}</span>
          <span className="block text-[0.8125rem] text-muted">{t.role}</span>
          <span className="block text-[0.8125rem] font-semibold text-brand-600">{t.company}</span>
        </span>
        <span aria-hidden="true" className="font-display text-[2rem] leading-none font-extrabold text-brand-100">
          {String(index + 1).padStart(2, '0')}
        </span>
      </figcaption>
    </figure>
  );
}

export default function TestimonialCarousel({ items }) {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    el?.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el?.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    const card = el?.querySelector('li');
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: 'smooth' });
  };

  const btn =
    'flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition-colors hover:border-navy-900 hover:bg-navy-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line disabled:hover:bg-white disabled:hover:text-ink';

  return (
    <div>
      <ul
        ref={trackRef}
        tabIndex={0}
        aria-label="Client testimonials — scroll horizontally"
        className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto scroll-smooth px-4 pt-2 pb-6 sm:scroll-px-6 lg:scroll-px-8 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((t, i) => (
          <li
            key={`${t.name}-${i}`}
            className="w-[86%] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)]"
          >
            <Card t={t} index={i} />
          </li>
        ))}
      </ul>

      {items.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-3">
          <button type="button" className={btn} onClick={() => scrollByCard(-1)} disabled={atStart} aria-label="Previous testimonial">
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" className={btn} onClick={() => scrollByCard(1)} disabled={atEnd} aria-label="Next testimonial">
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
