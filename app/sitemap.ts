import { MetadataRoute } from 'next';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';
import { SERVICE_PAGES } from '@/content/servicePages';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = NAV_LINKS.map((link) => ({
    url: `${SITE_CONFIG.url}${link.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: link.href === '/' ? 1 : 0.8,
  }));

  const services = Object.keys(SERVICE_PAGES).map((serviceId) => ({
    url: `${SITE_CONFIG.url}/services/${serviceId}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...services];
}
