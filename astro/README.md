# DevNotes (Astro)

Test site #8 for the SEO crawler: a fictional tech blog and docs site built with **Astro 7.4.1**,
fully static output, with no extra integrations.

## Rendering mode

Static site generation (`output: 'static'`). Every page is pre-built to HTML in `dist/` with
`build.format: 'file'` (`/about` → `dist/about.html`) and `trailingSlash: 'never'`. Dynamic routes
(`/docs/[slug]`, `/blog/[slug]`) use `getStaticPaths`. `src/pages/404.astro` becomes
`dist/404.html`, which `astro preview` serves with HTTP 404 for unknown URLs.

## Commands

Requires Node >= 22.22.

```sh
npm install
npm run dev       # dev server on http://localhost:3008
npm run build     # static build into ./dist
npm run preview   # serve ./dist on http://localhost:3008
```

## SITE_URL

`astro.config.mjs` sets `site` from the `SITE_URL` environment variable (default
`http://localhost:3008`). Canonical, Open Graph, JSON-LD, `sitemap.xml` and `robots.txt` URLs are
built from it at build time:

```sh
SITE_URL=https://devnotes.example npm run build
```

## Routes

| Route | Notes |
|-------|-------|
| `/` | Home: `Organization` + `WebSite` JSON-LD |
| `/about` | About |
| `/docs` | Guide listing |
| `/docs/getting-started-with-git` | Guide: `TechArticle` + `BreadcrumbList` |
| `/docs/css-grid-layout` | Guide: `TechArticle` + `BreadcrumbList` |
| `/docs/typescript-generics` | Guide: `TechArticle` + `BreadcrumbList` |
| `/blog` | Blog index |
| `/blog/why-we-moved-to-static-site-generation` | Post: `BlogPosting` + `BreadcrumbList` |
| `/blog/writing-accessible-forms` | Post: no JSON-LD (intentional, see below) |
| `/contact` | Contact + non-functional form |
| `/faq` | FAQ: `FAQPage` JSON-LD |
| `/privacy` | Privacy policy |
| `/sitemap.xml` | `src/pages/sitemap.xml.ts` endpoint |
| `/robots.txt` | `src/pages/robots.txt.ts` endpoint |
| anything else | Custom 404 (`src/pages/404.astro`, HTTP 404 in preview) |

The docs detail pages use `TechArticle` structured data, the schema.org type for technical
documentation, in place of the `Product`/`Service` types used by the commercial sites.

## Structure

```
astro.config.mjs        site (from SITE_URL), static output, port 3008
src/
  data.ts               all content (site info, guides, posts, FAQs)
  schema.ts             JSON-LD builders
  url.ts                normalises build-time paths (/about.html → /about) for canonicals
  components/SEO.astro  title, description, canonical, OG, Twitter, JSON-LD
  components/Breadcrumbs.astro
  layouts/BaseLayout.astro  <html lang>, charset, viewport, favicon, header/nav/main/footer
  pages/                routes, endpoints and 404.astro
  styles/global.css
public/                 favicon.svg + SVG placeholder images
```

## Intentional SEO issues

These are deliberate. Everything else should pass.

| Issue | URL | Where |
|-------|-----|-------|
| Broken external link to a non-existent domain (`https://example.invalid/static-site-benchmarks`) | `http://localhost:3008/blog/why-we-moved-to-static-site-generation` | "Further reading" list, `links` in `src/data.ts` |
| Missing JSON-LD (no `BlogPosting` or `BreadcrumbList`) on a blog post | `http://localhost:3008/blog/writing-accessible-forms` | `omitJsonLd: true` in `src/data.ts` |
| Duplicate `<h1>` text across two pages ("Learn Web Development with DevNotes") | `http://localhost:3008/docs` and `http://localhost:3008/blog` | `src/pages/docs/index.astro`, `src/pages/blog/index.astro` |

## Version note

`astro` is pinned to **7.4.1**. Astro 7.4.2 and later need Node >= 22.23.4, and its CLI refuses to
start on the Node 22.23.1 this repo was built with. 7.4.1 is the newest release that supports
Node >= 22.22. Once Node is upgraded, you can move to the latest 7.x.
