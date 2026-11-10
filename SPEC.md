# SEO Test Sites: Shared Spec

10 small websites, each built with a different framework, used to check that our SEO tool
crawls and parses every rendering style correctly (static HTML, server-rendered, SSG, and
client-side SPA).

## Sites

| # | Folder         | Framework / rendering                    | Fictional business            | Dev port |
|---|----------------|------------------------------------------|-------------------------------|----------|
| 1 | `html-static`  | Plain HTML + CSS + vanilla JS (static)   | Brightside Bakery             | 3001     |
| 2 | `php`          | Plain PHP 8 (server-rendered, includes)  | Summit Hiking Gear (shop)     | 3002     |
| 3 | `react-vite`   | React + Vite + React Router (CSR SPA)    | PixelForge Design Agency      | 3003     |
| 4 | `nextjs`       | Next.js App Router (SSG/SSR)             | Ledgerly (accounting SaaS)    | 3004     |
| 5 | `vue-vite`     | Vue 3 + Vite + Vue Router (CSR SPA)      | GreenLeaf Plant Shop          | 3005     |
| 6 | `nuxt`         | Nuxt (SSR)                               | Wanderlust Travel Blog        | 3006     |
| 7 | `sveltekit`    | SvelteKit (SSR + prerender)              | FitPulse Gym                  | 3007     |
| 8 | `astro`        | Astro (static output)                    | DevNotes (tech blog / docs)   | 3008     |
| 9 | `angular`      | Angular (CSR SPA, standalone components) | CityCare Dental Clinic        | 3009     |
| 10| `flask`        | Python Flask + Jinja2 (server-rendered)  | Bookworm Bookstore            | 3010     |

Each site lives in its own top-level folder and is fully self-contained (own package.json /
requirements.txt, own README).

## Pages (minimum 10 routes per site)

Adapt the names to the business, but each site must have:

1. Home `/`
2. About `/about`
3. Listing page (services / products / menu / classes ...) e.g. `/services`
4. Detail page 1 (dynamic route if the framework supports it) e.g. `/services/branding`
5. Detail page 2 (same dynamic route, different slug)
6. Detail page 3 (same dynamic route, different slug)
7. Blog index `/blog`
8. Blog post 1 `/blog/<slug>` (dynamic route)
9. Blog post 2 `/blog/<slug>`
10. Contact `/contact` (with a non-functional form)
11. FAQ `/faq`
12. Privacy policy `/privacy`
13. Custom 404 page (returns HTTP 404 where the framework/server allows it)

Content: realistic copy, roughly 150–400 words on content pages so pages aren't "thin"
(except where a defect below says otherwise). Keep data in a single data file per site
(e.g. `src/data.ts`, `data.php`, `data.py`) and render pages from it.

## SEO requirements on every page (the "correct" baseline)

- `<html lang="en">`, `<meta charset>`, `<meta name="viewport">`
- Unique `<title>` (≈30–60 chars) in the form `Page Name | Business Name`
- Unique `<meta name="description">` (≈70–160 chars)
- `<link rel="canonical">` absolute URL built from `SITE_URL`
- Open Graph: `og:title`, `og:description`, `og:url`, `og:type`, `og:image`, `og:site_name`
- Twitter: `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`
- Exactly one `<h1>`, logical `h2`/`h3` hierarchy
- Every `<img>` has meaningful `alt`, plus `width`/`height`
- Semantic layout: `<header>`, `<nav>`, `<main>`, `<footer>`; shared nav + footer linking to all main pages
- Breadcrumb nav on detail pages and blog posts
- JSON-LD structured data:
  - Home: `Organization` (or more specific: `Bakery`, `Store`, `Dentist`, `ExerciseGym`, ...) + `WebSite`
  - Detail pages: `Product` / `Service` + `BreadcrumbList`
  - Blog posts: `BlogPosting` (headline, datePublished, author, image) + `BreadcrumbList`
  - FAQ: `FAQPage`
- `robots.txt` at site root, referencing the sitemap
- `sitemap.xml` at site root listing all indexable pages (absolute URLs)
- Favicon (`/favicon.svg` is fine)
- Images: local SVG placeholders in the site's public/static folder (no external image hosts)

### SITE_URL

Canonical, OG and sitemap URLs are built from a `SITE_URL` setting (env var where the framework
supports it, otherwise a constant in config) that defaults to `http://localhost:<dev port>`.
For SPAs whose sitemap is a static file, generate it with a tiny script or hard-code the
localhost URL and document it.

### SPA specifics (React, Vue, Angular)

Set head tags per route on the client (react-helmet-async / @unhead/vue / Angular `Title` + `Meta`
services, with canonical + JSON-LD injected too). The initial `index.html` should contain
sensible default title/description. This deliberately tests whether the SEO tool renders JS.
Configure the dev/preview server for history-API fallback so deep links work.

## Intentional SEO defects

Each site deliberately contains exactly the defects assigned below, so we can check that the tool
reports them. Everything else must be clean. Document them in the site's README under
"Intentional SEO issues", with the exact URL of each.

| Site          | Defects                                                                                     |
|---------------|---------------------------------------------------------------------------------------------|
| html-static   | missing meta description on `/privacy`; image without `alt` on `/about`; broken internal link (`/menu/croissant-old`) on a menu detail page |
| php           | duplicate `<title>` (two product pages share one); missing `<h1>` on `/faq`; `noindex` on `/privacy` while it is still listed in sitemap |
| react-vite    | title longer than 70 chars on one service page; two `<h1>` on `/about`; canonical on `/blog` points to the home URL |
| nextjs        | description longer than 200 chars on `/pricing` (or a listing page); heading skip (h1 → h4) on one blog post; missing `og:image` on `/contact` |
| vue-vite      | missing canonical on `/faq`; image without `alt` on a product page; non-descriptive link text ("click here") on home |
| nuxt          | thin content (< 50 words) on one blog post; duplicate meta description on two destination pages; broken internal link on `/blog` |
| sveltekit     | missing `<title>` on `/privacy`; `noindex` on one class page; image missing `width`/`height` on home |
| astro         | broken external link (to a non-existent domain like `https://example.invalid/`) on a post; missing JSON-LD on one post; duplicate `<h1>` text across two pages |
| angular       | missing meta description on one service page; canonical with relative (not absolute) URL on `/about`; page reachable only via JS click handler (no `<a href>`) — `/careers`, not in nav as a link |
| flask         | 302 redirect from `/old-books` to `/books` (chain: `/legacy-books` → `/old-books` → `/books`); missing `<html lang>` on `/privacy`; mixed content (`http://` image URL) on `/about` |

## Deliverables per site

- Source code, minimal and idiomatic for the framework
- `README.md`: framework + version, install/run/build commands, port, routes list, rendering mode,
  intentional SEO issues
- Must install and build (or start) without errors. Run the build to verify.
- No CSS frameworks needed; a small hand-written stylesheet is enough. Each site should look
  distinct (own colour palette).
