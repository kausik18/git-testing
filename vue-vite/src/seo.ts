import { useHead } from '@unhead/vue'
import { business } from './data.ts'

/** Absolute site origin, from VITE_SITE_URL (default http://localhost:3005), without trailing slash. */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'http://localhost:3005').replace(/\/+$/, '')

export const absoluteUrl = (path: string): string => `${SITE_URL}${path}`

export type JsonLd = Record<string, unknown>

export interface Crumb {
  name: string
  path: string
}

export interface PageSeo {
  title: string
  description: string
  /** Route path of the page, e.g. "/about". Used for og:url and, by default, the canonical URL. */
  path: string
  /** Override the canonical URL (absolute). Pass `null` to omit the canonical tag. */
  canonical?: string | null
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
  jsonLd?: JsonLd[]
}

/**
 * Sets all per-route head tags via @unhead/vue. The entry is disposed automatically when the
 * page component unmounts (the <RouterView> is keyed by path, so every route change remounts).
 */
export function usePageSeo(seo: PageSeo) {
  const url = absoluteUrl(seo.path)
  const canonical = seo.canonical === undefined ? url : seo.canonical
  const image = absoluteUrl(seo.image ?? business.ogImage)

  useHead({
    title: seo.title,
    meta: [
      { name: 'description', content: seo.description },
      ...(seo.noindex ? [{ name: 'robots', content: 'noindex, follow' }] : []),
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: seo.type ?? 'website' },
      { property: 'og:image', content: image },
      { property: 'og:site_name', content: business.name },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seo.title },
      { name: 'twitter:description', content: seo.description },
      { name: 'twitter:image', content: image },
    ],
    link: canonical ? [{ rel: 'canonical', href: canonical }] : [],
    script: (seo.jsonLd ?? []).map((data) => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(data),
    })),
  })
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

export const storeJsonLd: JsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  '@id': `${SITE_URL}/#organization`,
  name: business.name,
  url: absoluteUrl('/'),
  logo: absoluteUrl(business.logo),
  image: absoluteUrl(business.ogImage),
  email: business.email,
  telephone: business.phone,
  priceRange: '$$',
  openingHours: business.openingHours,
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
