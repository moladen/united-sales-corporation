// Client testimonials for the "Client Stories" section.
//
// IMPORTANT — DEMO CONTENT
// Entries marked `demo: true` are placeholders for design preview only.
// They are shown ONLY in local development (`npm run dev`), with a
// "Demo content" label, and are never rendered on the live website.
//
// To publish real testimonials, add entries WITHOUT `demo: true`, using
// genuine feedback and the client's permission to show their name.
// As soon as one real entry exists, only real entries are shown — in
// development and on the live site. Then delete the demo entries.
//
// Fields: quote, name, role, company, rating (optional, 1–5, as given by the client)

export const testimonials = [
  {
    demo: true,
    quote:
      'The team coordinated our HVAC and fire-sprinkler work with the interior contractor without any clashes on site. Drawings, testing and handover documents were organised properly.',
    name: 'Rahul Verma',
    role: 'Projects Manager',
    company: 'Retail Brand (Demo)',
    rating: 5,
  },
  {
    demo: true,
    quote:
      'We engaged United Sales Corporation for the fire alarm system in our restaurant. Installation was neat, every device was tested, and they explained the panel to our staff.',
    name: 'Ayesha Khan',
    role: 'Operations Head',
    company: 'Restaurant Group (Demo)',
    rating: 5,
  },
  {
    demo: true,
    quote:
      'Their maintenance visits are regular and the service reports are clear. When an AC unit failed during peak hours, the fault was diagnosed and fixed quickly.',
    name: 'Vikram Singh',
    role: 'Facility Manager',
    company: 'Commercial Building (Demo)',
    rating: 5,
  },
  {
    demo: true,
    quote:
      'Our showroom fit-out had a tight opening date. They planned the HVAC, fire and civil works together and kept us updated at every stage until handover.',
    name: 'Neha Agarwal',
    role: 'Store Development Lead',
    company: 'Fashion Brand (Demo)',
    rating: 5,
  },
  {
    demo: true,
    quote:
      'Practical advice on fire-safety equipment for our new premises, without overselling. The site review helped us understand exactly what was needed.',
    name: 'Imran Siddiqui',
    role: 'Director',
    company: 'Food Court Operator (Demo)',
    rating: 5,
  },
];

// Returns { items, demo } — real testimonials if any exist; otherwise demo
// entries in development only; otherwise an empty list (section hidden).
export function getTestimonials() {
  const real = testimonials.filter((t) => !t.demo);
  if (real.length) return { items: real, demo: false };
  if (process.env.NODE_ENV !== 'production') return { items: testimonials, demo: true };
  return { items: [], demo: false };
}
