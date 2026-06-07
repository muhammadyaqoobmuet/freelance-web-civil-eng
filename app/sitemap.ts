import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arslanjaved.engineer'
  
  const routes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/education',
    '/experience',
    '/plans',
    '/certificates',
    '/contact',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
