import { destinations, posts } from '#shared/data'

export default defineEventHandler((event) => {
  const base = String(useRuntimeConfig(event).public.siteUrl).replace(/\/+$/, '')
  const abs = (path: string) => (path === '/' ? `${base}/` : `${base}${path}`)

  const entries: { loc: string, lastmod?: string }[] = [
    ...['/', '/about', '/destinations', '/blog', '/contact', '/faq', '/privacy'].map(p => ({ loc: abs(p) })),
    ...destinations.map(d => ({ loc: abs(`/destinations/${d.slug}`) })),
    ...posts.map(p => ({ loc: abs(`/blog/${p.slug}`), lastmod: p.datePublished })),
  ]

  const body = entries
    .map(e => `  <url>\n    <loc>${e.loc}</loc>${e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : ''}\n  </url>`)
    .join('\n')

  setResponseHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
})
