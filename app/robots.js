import { site } from '@/lib/site';

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: '/api/' }],
    // Sitemap location is only published once the production domain is set.
    ...(site.url ? { sitemap: `${site.url}/sitemap.xml`, host: site.url } : {}),
  };
}
