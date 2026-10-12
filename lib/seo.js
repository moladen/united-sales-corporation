import { site, absoluteUrl } from './site';

// Builds per-page metadata. Canonical URLs are only emitted once
// NEXT_PUBLIC_SITE_URL (the confirmed production domain) is set.
export function pageMetadata({ title, description, path = '/' }) {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      title: title ? `${title} | ${site.name}` : site.name,
      description,
      url,
      siteName: site.name,
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} | ${site.name}` : site.name,
      description,
    },
  };
}

export function organizationSchema() {
  const { contact } = site;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': site.url ? `${site.url}/#organization` : undefined,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url || undefined,
    logo: site.url ? `${site.url}${site.logo.src}` : undefined,
    email: contact.email,
    telephone: contact.phones.map((p) => p.tel),
    foundingDate: String(site.established),
    founder: { '@type': 'Person', name: site.founder.name, jobTitle: 'Owner & Founder' },
    taxID: contact.gstin,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address.street,
      addressLocality: contact.address.locality,
      addressRegion: contact.address.region,
      addressCountry: contact.address.country,
    },
    knowsAbout: ['HVAC', 'Fire fighting systems', 'Fire alarm and detection', 'MEP coordination', 'Civil works', 'Retail fit-outs', 'Maintenance and AMC'],
  };
  return JSON.parse(JSON.stringify(schema));
}

export function serviceSchema(service) {
  return JSON.parse(
    JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.metaDescription,
      serviceType: service.title,
      url: absoluteUrl(`/services/${service.slug}`),
      provider: { '@type': 'LocalBusiness', name: site.name, telephone: site.contact.phones[0].tel, email: site.contact.email },
      areaServed: { '@type': 'Country', name: 'India' },
    })
  );
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(items) {
  // Breadcrumb URLs must be absolute; skip until the domain is configured.
  if (!site.url) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
