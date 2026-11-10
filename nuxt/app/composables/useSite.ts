import { site } from '#shared/data'

/** Absolute site URL helpers built from runtimeConfig.public.siteUrl (NUXT_PUBLIC_SITE_URL). */
export function useSiteUrl() {
  const base = String(useRuntimeConfig().public.siteUrl).replace(/\/+$/, '')
  const absolute = (path: string) => (path === '/' ? `${base}/` : `${base}${path}`)
  return { base, absolute }
}

interface PageSeoInput {
  /** Full title in the form "Page Name | Wanderlust". */
  title: string
  description: string
  /** Path relative to the site root, e.g. "/about". */
  path: string
  type?: 'website' | 'article'
  image?: string
  imageAlt?: string
  publishedTime?: string
  author?: string
}

/** Sets title, description, canonical, Open Graph and Twitter tags for a page. */
export function usePageSeo(input: PageSeoInput) {
  const { absolute } = useSiteUrl()
  const url = absolute(input.path)
  const image = absolute(input.image ?? '/images/og-default.svg')
  const imageAlt = input.imageAlt ?? `${site.name} travel blog`

  useSeoMeta({
    title: input.title,
    description: input.description,
    ogTitle: input.title,
    ogDescription: input.description,
    ogUrl: url,
    ogType: input.type ?? 'website',
    ogImage: image,
    ogImageAlt: imageAlt,
    ogSiteName: site.name,
    ogLocale: 'en_US',
    twitterCard: 'summary_large_image',
    twitterTitle: input.title,
    twitterDescription: input.description,
    twitterImage: image,
    twitterImageAlt: imageAlt,
    ...(input.type === 'article'
      ? { articlePublishedTime: input.publishedTime, articleAuthor: input.author ? [input.author] : undefined }
      : {}),
  })
  useHead({ link: [{ rel: 'canonical', href: url }] })
}

/** Injects one or more JSON-LD blocks as <script type="application/ld+json">. */
export function useJsonLd(...blocks: Record<string, unknown>[]) {
  useHead({
    script: blocks.map((data, i) => ({
      key: `ld-json-${i}`,
      type: 'application/ld+json',
      textContent: JSON.stringify(data),
    })),
  })
}

/** BreadcrumbList JSON-LD for a list of crumbs. */
export function breadcrumbLd(items: { name: string, path: string }[], absolute: (p: string) => string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'name': item.name,
      'item': absolute(item.path),
    })),
  }
}

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
