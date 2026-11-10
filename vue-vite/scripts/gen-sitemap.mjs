// Generates public/robots.txt and public/sitemap.xml from the route list in src/data.ts.
// Runs automatically before `npm run dev` and `npm run build`.
// The origin comes from VITE_SITE_URL (process env or .env files, same as Vite), default http://localhost:3005.
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { loadEnv } from 'vite'
import { sitemapRoutes } from '../src/data.ts'

const root = fileURLToPath(new URL('..', import.meta.url))
const mode = process.env.npm_lifecycle_event === 'predev' ? 'development' : 'production'
const env = { ...loadEnv(mode, root, 'VITE_'), ...process.env }
const siteUrl = (env.VITE_SITE_URL || 'http://localhost:3005').replace(/\/+$/, '')

const urls = sitemapRoutes
  .map(({ path, lastmod }) =>
    [
      '  <url>',
      `    <loc>${siteUrl}${path}</loc>`,
      lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
      '  </url>',
    ]
      .filter(Boolean)
      .join('\n'),
  )
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), sitemap)
writeFileSync(new URL('../public/robots.txt', import.meta.url), robots)
console.log(`Generated robots.txt and sitemap.xml (${sitemapRoutes.length} URLs) for ${siteUrl}`)
