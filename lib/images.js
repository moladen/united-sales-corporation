// Photography slots. Each image appears automatically once a file exists at
// `src` (under /public). Until then a technical line drawing is shown.
// Use genuine company/site photography or properly licensed images only.

export const images = {
  hero: {
    src: '/images/hero.jpg',
    alt: 'Commercial building services installation in progress',
  },
  intro: {
    src: '/images/intro.jpg',
    alt: 'Engineers coordinating building services on a commercial site',
  },
  about: {
    src: '/images/about.jpg',
    alt: 'United Sales Corporation team on a commercial project site',
  },
  service: (slug, title) => ({
    src: `/images/services/${slug}.jpg`,
    alt: `${title} — United Sales Corporation`,
  }),
};
