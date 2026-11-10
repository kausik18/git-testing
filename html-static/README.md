# Brightside Bakery (html-static)

Site 1 of the SEO test sites. A neighbourhood bakery built with **plain HTML5 + CSS + vanilla
JavaScript**. No framework, no dependencies.

- **Rendering mode:** fully static. Every route is a pre-written HTML file
  (`public/<route>/index.html`). JavaScript is only progressive enhancement (mobile nav toggle,
  demo contact form).
- **Runtime:** Node.js 18+ (only for the bundled zero-dependency dev server and helper scripts).
- **Port:** 3001
- **SITE_URL:** hard-coded as `http://localhost:3001` in the generated files (static HTML cannot
  read env vars). See "Deploying under another domain" below.

## Run

```bash
cd html-static
node server.mjs          # or: npm start
# open http://localhost:3001
```

There is nothing to install. `PORT=4000 node server.mjs` changes the port.

`server.mjs` serves `public/` with clean URLs:

- `/about/` serves `public/about/index.html`
- `/about` (directory without trailing slash) gets a `301` to `/about/`
- any unknown path serves `public/404.html` with a real **HTTP 404** status

The `public/` folder can also be deployed as-is to any static host (Netlify, GitHub Pages, S3,
nginx). Most of those serve `404.html` automatically.

## Build (optional)

The HTML files in `public/` are committed, so you do not need to build anything to run the site.
They are rendered from a single content file, `data.mjs`, by `scripts/build.mjs`. If you edit
`data.mjs`, regenerate the pages with:

```bash
npm run build                                   # SITE_URL defaults to http://localhost:3001
SITE_URL=https://www.example.com npm run build  # bake in another base URL
```

The build also writes `robots.txt`, `sitemap.xml`, the placeholder SVG images and the favicon,
and prints a table of title length, description length and word count per page.

## Deploying under another domain

Canonical, `og:url`, `og:image`, `twitter:image`, JSON-LD, `sitemap.xml` and `robots.txt` all
use absolute URLs. To change the base URL in the existing files without rebuilding:

```bash
node scripts/set-site-url.mjs https://www.example.com
```

The script detects the current base URL from `public/robots.txt` and rewrites it in every
`.html`, `.xml` and `.txt` file under `public/`. Run it again with `http://localhost:3001` to
switch back.

## Routes

URLs use a trailing slash (folder + `index.html`).

| Route | File | Notes |
|-------|------|-------|
| `/` | `public/index.html` | Home, JSON-LD `Bakery` + `WebSite` |
| `/about/` | `public/about/index.html` | About |
| `/menu/` | `public/menu/index.html` | Listing page |
| `/menu/country-sourdough/` | `public/menu/country-sourdough/index.html` | Detail, `Product` + `BreadcrumbList` |
| `/menu/butter-croissant/` | `public/menu/butter-croissant/index.html` | Detail, `Product` + `BreadcrumbList` |
| `/menu/cinnamon-swirl-bun/` | `public/menu/cinnamon-swirl-bun/index.html` | Detail, `Product` + `BreadcrumbList` |
| `/blog/` | `public/blog/index.html` | Blog index |
| `/blog/why-we-ferment-sourdough-for-48-hours/` | `public/blog/why-we-ferment-sourdough-for-48-hours/index.html` | `BlogPosting` + `BreadcrumbList` |
| `/blog/how-to-keep-bread-fresh/` | `public/blog/how-to-keep-bread-fresh/index.html` | `BlogPosting` + `BreadcrumbList` |
| `/contact/` | `public/contact/index.html` | Non-functional contact form |
| `/faq/` | `public/faq/index.html` | `FAQPage` |
| `/privacy/` | `public/privacy/index.html` | Privacy policy |
| any other path | `public/404.html` | Custom 404 page, HTTP 404, `noindex` |
| `/robots.txt` | `public/robots.txt` | References the sitemap |
| `/sitemap.xml` | `public/sitemap.xml` | All 12 indexable pages |
| `/favicon.svg` | `public/favicon.svg` | |

## Project structure

```
html-static/
  data.mjs                 all page content (single data file)
  server.mjs               zero-dependency static server (clean URLs, real 404)
  package.json             start / build / set-site-url scripts
  scripts/build.mjs        renders public/*.html, robots.txt, sitemap.xml, images from data.mjs
  scripts/set-site-url.mjs rewrites the absolute base URL in public/
  public/                  the deployable static site
    css/styles.css
    js/main.js
    images/*.svg           local placeholder images
```

## Intentional SEO issues

These defects are deliberate so the SEO tool can be checked against them. Everything else
should pass a clean audit.

| # | Issue | URL |
|---|-------|-----|
| 1 | Missing `<meta name="description">` (OG/Twitter descriptions are still present) | `http://localhost:3001/privacy/` |
| 2 | Image without an `alt` attribute (`/images/oven.svg`, in the "Inside the bakehouse" section) | `http://localhost:3001/about/` |
| 3 | Broken internal link to `/menu/croissant-old` (returns 404), link text "our original croissant recipe" | on `http://localhost:3001/menu/butter-croissant/` |

The defects come from `data.mjs` (`pages.privacy.description: null`, `menuItems[1].legacyLink`)
and `scripts/build.mjs` (the about page oven image), each marked with an `INTENTIONAL SEO DEFECT`
comment.
