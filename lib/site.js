// Central company configuration. Update contact details here and they
// propagate to the header, footer, contact page, structured data and form.

export const site = {
  name: 'United Sales Corporation',
  legalName: 'UNITED SALES CORPORATION',
  tagline: 'Engineering • Fire & Life Safety • MEP • Commercial Projects',
  focusAreas: ['Engineering', 'Fire & Life Safety', 'MEP', 'Commercial Projects'],
  established: 2019,
  description:
    'United Sales Corporation delivers integrated engineering and building-service support across HVAC, fire protection, fire alarm systems, MEP coordination, civil works, retail fit-outs, and maintenance.',

  // Production domain is not yet confirmed. Set NEXT_PUBLIC_SITE_URL once it is.
  url: (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, ''),

  founder: {
    name: 'Mohd Irfan Akram',
    designation: 'Owner & Founder | United Sales Corporation',
    // Add the original photograph at public/images/founder.jpg — it is picked up automatically.
    photo: { src: '/images/founder.jpg', width: 800, height: 1000 },
  },

  // Approved logo (background removed, trimmed). width/height are the file's
  // real pixel size so proportions are preserved. logo-mark.png = droplet only.
  logo: { src: '/images/logo.png', width: 1291, height: 565, mark: '/images/logo-mark.png' },

  contact: {
    address: {
      lines: ['Plot No. A-31, Mahona, Bakshi Ka Talab, Mishripur,', 'Lucknow, Uttar Pradesh, India.'],
      street: 'Plot No. A-31, Mahona, Bakshi Ka Talab, Mishripur',
      locality: 'Lucknow',
      region: 'Uttar Pradesh',
      country: 'IN',
    },
    email: 'united.sales.mep@gmail.com',
    phones: [
      { display: '+91 89319 93806', tel: '+918931993806' },
      { display: '+91 88519 93806', tel: '+918851993806' },
    ],
    gstin: '09ACFPI3463G1ZN',
    // Confirmed by the client as the number that receives WhatsApp enquiries.
    whatsapp: {
      display: '+91 88519 93806',
      number: '918851993806', // international format, digits only (for wa.me links)
      greeting: 'Hello United Sales Corporation, I would like to discuss an engineering requirement.',
    },
  },
};

export const fullAddress = site.contact.address.lines.join(' ');

export function absoluteUrl(path = '/') {
  return site.url ? `${site.url}${path}` : undefined;
}
