# Wanderlust — Nuxt SEO test site

Fictional travel blog ("Wanderlust") built with **Nuxt** to test how an SEO crawler handles a
server-rendered (SSR) Vue site.

- **Framework:** Nuxt 4.6.4 (Vue 3.5.45, Vue Router 5.4, Nitro 2 / node-server preset), TypeScript
- **Rendering mode:** SSR. Every request is rendered on the server by Nitro, then hydrated on the client.
- **Port:** 3006
- **Node:** ^22.22.3, ^24.15 or >=26 (Nuxt 4.6 engine requirement; tested on Node 22.23)

## Commands

```bash
npm install          # also runs `nuxt prepare`
npm run dev          # nuxt dev --port 3006     -> http://localhost:3006
npm run build        # nuxt build -> .output/
npm run preview      # nuxt preview --port 3006 (after build)
npm start            # node start.mjs: runs .output/server/index.mjs on PORT (default 3006)
```

You can also run the built server directly with `PORT=3006 node .output/server/index.mjs`.

### Site URL

Canonical, Open Graph, JSON-LD, sitemap and robots URLs are built from
`runtimeConfig.public.siteUrl` (default `http://localhost:3006`). Override it at **runtime** with
`NUXT_PUBLIC_SITE_URL`, with no rebuild needed:

```bash
NUXT_PUBLIC_SITE_URL=https://wanderlust.example npm start
```

## How SEO is implemented

- `useSeoMeta` + `useHead` per page via the `usePageSeo()` composable (`app/composables/useSite.ts`):
  title, description, canonical, Open Graph and Twitter tags. `useJsonLd()` injects
  `<script type="application/ld+json">`.
- `<html lang="en">`, charset, viewport and favicon are set in `nuxt.config.ts` (`app.head`).
- `/sitemap.xml` and `/robots.txt` are Nitro server routes (`server/routes/sitemap.xml.ts`,
  `server/routes/robots.txt.ts`). No SEO modules are used.
- `app/error.vue` is the custom error page. Unknown routes and unknown slugs
  (`throw createError({ status: 404 })`) return HTTP 404 with a `noindex` robots tag.
- All content lives in `shared/data.ts` (imported as `#shared/data` by pages and server routes).
  Images are local SVG placeholders in `public/images/`, and the favicon is `public/favicon.svg`.

## Routes

| Route | Type | JSON-LD |
|---|---|---|
| `/` | Home | Organization, WebSite |
| `/about` | About | none |
| `/destinations` | Listing | none |
| `/destinations/kyoto` | Detail (dynamic `[slug]`) | Service, BreadcrumbList |
| `/destinations/lisbon` | Detail (dynamic `[slug]`) | Service, BreadcrumbList |
| `/destinations/patagonia` | Detail (dynamic `[slug]`) | Service, BreadcrumbList |
| `/blog` | Blog index | none |
| `/blog/carry-on-packing-list` | Blog post (dynamic `[slug]`) | BlogPosting, BreadcrumbList |
| `/blog/japan-rail-pass-guide` | Blog post (dynamic `[slug]`) | BlogPosting, BreadcrumbList |
| `/blog/beat-jet-lag` | Blog post (dynamic `[slug]`) | BlogPosting, BreadcrumbList |
| `/contact` | Contact (non-functional form) | none |
| `/faq` | FAQ | FAQPage |
| `/privacy` | Privacy policy | none |
| any unknown URL / slug | Custom error page (HTTP 404) | none |
| `/sitemap.xml`, `/robots.txt` | Server routes | n/a |

## Intentional SEO issues

These defects are deliberate. Everything else is meant to be clean.

| # | Issue | URL | Where in code |
|---|---|---|---|
| 1 | Thin content: fewer than 50 words in `<main>` (about 38) | `http://localhost:3006/blog/beat-jet-lag` | `posts` entry with empty `body` in `shared/data.ts` |
| 2 | Duplicate meta description on two destination pages | `http://localhost:3006/destinations/lisbon` and `http://localhost:3006/destinations/patagonia` | `SHARED_DESTINATION_DESCRIPTION` in `shared/data.ts` |
| 3 | Broken internal link to `/blog/iceland-ring-road-diary` (returns 404) | `http://localhost:3006/blog` | `app/pages/blog/index.vue` |

## Notes

- Nitro's error handler content-negotiates error responses. Requests that send `Accept: text/html`
  (browsers, most crawlers) get the custom HTML 404 page. Requests without it (for example plain
  `curl`, which sends `Accept: */*`) get a JSON error body. The status is **404** either way.
- The thin-content post still has a valid title, description, canonical, OG tags and JSON-LD, so
  the thin content is the only defect on that page.
