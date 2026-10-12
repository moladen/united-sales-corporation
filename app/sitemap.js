import { site } from '@/lib/site';
import { services } from '@/lib/services';

// Sitemap URLs must be absolute. Set NEXT_PUBLIC_SITE_URL to the confirmed
// production domain before deploying; localhost is only a development fallback.
const base = site.url || 'http://localhost:3000';

export default function sitemap() {
  const lastModified = new Date();
  const pages = [
    { path: '/', priority: 1 },
    { path: '/about', priority: 0.8 },
    { path: '/services', priority: 0.9 },
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.8 })),
    { path: '/industries', priority: 0.7 },
    { path: '/projects', priority: 0.7 },
    { path: '/contact', priority: 0.8 },
    { path: '/privacy-policy', priority: 0.3 },
  ];
  return pages.map((p) => ({
    url: `${base}${p.path === '/' ? '' : p.path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: p.priority,
  }));
}
