# Ledgerly — Next.js SEO test site

Fictional accounting SaaS ("Ledgerly") built with the **Next.js App Router** to test how an SEO
crawler handles a statically generated (SSG) React site.

- **Framework:** Next.js 16.4.6 (App Router, Turbopack), React 19.3.1, TypeScript 5.9
- **Rendering mode:** SSG. Every route is prerendered at build time (`generateStaticParams` with
  `dynamicParams = false` for dynamic routes) and served by `next start`.
- **Port:** 3004
- **Node:** 20.9+ (tested on Node 22)

## Commands

```bash
npm install
npm run dev      # next dev -p 3004   -> http://localhost:3004
npm run build    # next build
npm start        # next start -p 3004 (after build)
```

### SITE_URL

Canonical, Open Graph, JSON-LD, sitemap and robots URLs are built from the `SITE_URL` env var
(default `http://localhost:3004`, see `lib/site.ts`, used as `metadataBase`). Pages are static, so
set it **at build time**:

```bash
SITE_URL=https://ledgerly.example npm run build
```

## How SEO is implemented

- Metadata API: a static `metadata` export or `generateMetadata` on each page, built by `lib/seo.ts`
  (title, description, canonical, Open Graph, Twitter). `metadataBase` comes from `SITE_URL`.
- JSON-LD via `<script type="application/ld+json">` (`components/JsonLd.tsx`).
- `app/sitemap.ts` produces `/sitemap.xml`; `app/robots.ts` produces `/robots.txt`.
- `app/not-found.tsx` is the custom 404 page (returns HTTP 404, `noindex`).
- All content lives in `lib/data.ts`. Images are local SVG placeholders in `public/images/`, and the
  favicon is `public/favicon.svg`.

## Routes

| Route | Type | JSON-LD |
|---|---|---|
| `/` | Home | Organization, WebSite |
| `/about` | About | none |
| `/features` | Listing | none |
| `/features/invoicing` | Detail (dynamic `[slug]`) | Service, BreadcrumbList |
| `/features/expense-tracking` | Detail (dynamic `[slug]`) | Service, BreadcrumbList |
| `/features/financial-reports` | Detail (dynamic `[slug]`) | Service, BreadcrumbList |
| `/pricing` | Plans listing (extra page) | none |
| `/blog` | Blog index | none |
| `/blog/prepare-for-tax-season` | Blog post (dynamic `[slug]`) | BlogPosting, BreadcrumbList |
| `/blog/cash-flow-forecasting-basics` | Blog post (dynamic `[slug]`) | BlogPosting, BreadcrumbList |
| `/contact` | Contact (non-functional form) | none |
| `/faq` | FAQ | FAQPage |
| `/privacy` | Privacy policy | none |
| any unknown URL | Custom 404 (HTTP 404) | none |
| `/sitemap.xml`, `/robots.txt` | Generated | n/a |

## Intentional SEO issues

These defects are deliberate. Everything else is meant to be clean.

| # | Issue | URL | Where in code |
|---|---|---|---|
| 1 | Meta description longer than 200 characters (273 chars) | `http://localhost:3004/pricing` | `app/pricing/page.tsx` |
| 2 | Heading skip: `<h1>` followed directly by `<h4>` section headings | `http://localhost:3004/blog/cash-flow-forecasting-basics` | `sectionHeadingTag: 'h4'` in `lib/data.ts` |
| 3 | Missing `og:image` (Twitter image is still present) | `http://localhost:3004/contact` | `omitOgImage: true` in `app/contact/page.tsx` |

## Notes

- Next.js renders the home canonical as `http://localhost:3004` (no trailing slash), so the
  sitemap and JSON-LD use the same form for the root URL.
