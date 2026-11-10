import { business } from './data.ts'

/** Absolute site origin, from VITE_SITE_URL (default http://localhost:3003), without trailing slash. */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'http://localhost:3003').replace(/\/+$/, '')

export const absoluteUrl = (path: string): string => `${SITE_URL}${path}`

export type JsonLd = Record<string, unknown>

export interface Crumb {
  name: string
  path: string
}

export function breadcrumbJsonLd(crumbs: Crumb[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  }
}

export const organizationJsonLd: JsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: business.name,
  url: absoluteUrl('/'),
  logo: absoluteUrl(business.logo),
  image: absoluteUrl(business.ogImage),
  email: business.email,
  telephone: business.phone,
  foundingDate: business.founded,
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.street,
    addressLocality: business.city,
    addressRegion: business.region,
    postalCode: business.postalCode,
    addressCountry: business.country,
  },
}

export const websiteJsonLd: JsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: business.name,
  url: absoluteUrl('/'),
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en',
}

export const formatDate = (iso: string): string =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
