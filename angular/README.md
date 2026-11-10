# CityCare Dental Clinic — Angular (CSR SPA)

Test site #9 for the SEO crawler. A fictional dental clinic built as a **client-side rendered
Angular single-page app** with standalone components (no SSR, no prerendering). The initial HTML
contains only a default `<title>` and meta description; every other head tag is injected per route
in the browser, so a crawler must execute JavaScript to see the correct SEO metadata.

- **Framework:** Angular 22.2 (`@angular/core` 22.2.5, `@angular/cli` / `@angular/build` 22.2.6), TypeScript 6.0, zoneless change detection
- **Node:** 22.22.3+ (Angular 22 requirement; tested with Node 22.23.1 / npm 10.9.8)
- **Rendering mode:** CSR SPA, history-API routing
- **Port:** 3009

## Commands

```bash
npm install
npm start               # ng serve on http://localhost:3009 (history fallback built in)
npm run build           # production build -> dist/citycare/browser
npm run serve:dist      # node serve-dist.mjs: serves the build on :3009 with SPA fallback
```

`serve-dist.mjs` is a zero-dependency Node static server. Paths without a file extension that do not
match a file get `index.html` (status 200); missing files with an extension get a 404.

## SITE_URL

`SITE_URL` is a constant in `src/environments/environment.ts` (default `http://localhost:3009`).
A CSR bundle has no runtime environment variables, so change the constant and rebuild to use another
origin. It is used for canonical URLs, `og:url`, `og:image`, `twitter:image` and JSON-LD URLs.

`public/robots.txt` and `public/sitemap.xml` are static files with **hard-coded
`http://localhost:3009` URLs**; edit them by hand if `SITE_URL` changes.

## How SEO tags are set

`src/app/seo.service.ts` (`SeoService`) uses Angular's `Title` and `Meta` services plus `DOCUMENT` to
set, on every route: `<title>`, meta description, `<link rel="canonical">`, Open Graph
(`og:title/description/url/type/image/site_name`), Twitter card tags, optional `robots`, and
`<script type="application/ld+json">` blocks (old ones are removed on navigation). Each page component
calls `seo.update(...)` in its constructor; detail pages call it whenever the `:slug` param changes.

JSON-LD: Home `Dentist` + `WebSite`; service pages `Service` + `BreadcrumbList`; blog posts
`BlogPosting` + `BreadcrumbList`; FAQ `FAQPage`.

All content lives in `src/app/data.ts`. Images are local SVG placeholders in `public/images/`;
the favicon is `public/favicon.svg`.

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/services` | Services listing |
| `/services/teeth-cleaning` | Service detail |
| `/services/dental-implants` | Service detail |
| `/services/teeth-whitening` | Service detail |
| `/blog` | Blog index |
| `/blog/how-often-should-you-floss` | Blog post |
| `/blog/first-dental-visit-for-kids` | Blog post |
| `/contact` | Contact (non-functional form) |
| `/faq` | FAQ |
| `/privacy` | Privacy policy |
| `/careers` | Careers (see intentional issues) |
| `**` | Not found page |

**404 handling:** as a pure CSR SPA, the server cannot know which routes exist, so unknown URLs
(e.g. `/does-not-exist`, `/services/unknown`) return **HTTP 200** with `index.html`; Angular then
renders the "Page Not Found" component with title "Page Not Found | CityCare Dental Clinic" and
`<meta name="robots" content="noindex">`. Requests for missing static files (e.g. `/missing.png`)
return a real 404 from `serve-dist.mjs`.

## Intentional SEO issues

These defects are deliberate. Everything else should audit clean.

1. **Missing meta description** — `http://localhost:3009/services/teeth-whitening`
   The service has `omitMetaDescription: true` in `src/app/data.ts`, so `SeoService` removes
   `<meta name="description">` on this route (Open Graph / Twitter descriptions are still present).
2. **Relative canonical URL** — `http://localhost:3009/about`
   Renders `<link rel="canonical" href="/about">` instead of an absolute URL
   (`canonicalHref` override in `src/app/pages/about.ts`).
3. **Page reachable only via a JS click handler** — `http://localhost:3009/careers`
   The only way to reach it in the UI is the "Careers" item in the footer, which is a
   `<span role="button" (click)="...">`, not an `<a href>`. It is not in the main nav and no
   `<a href="/careers">` exists anywhere. It *is* listed in `sitemap.xml`, so a crawler can discover
   it there and flag it as having no crawlable internal links (orphan page).
