# SEO Tool Test Sites

10 small websites, each built with a different framework and rendering style, used to check
that our SEO tool crawls and audits every kind of site correctly. Each site has 12–15 routes
plus a custom 404, a `robots.txt`, a `sitemap.xml`, and full meta / Open Graph / Twitter /
JSON-LD markup.

The shared requirements are in [SPEC.md](SPEC.md). Each folder has its own README with the
route list and exact versions.

## Sites

| Folder | Framework | Rendering | Port | Run |
|---|---|---|---|---|
| [html-static](html-static/) | Plain HTML + CSS + JS | Static files | 3001 | `node server.mjs` |
| [php](php/) | Plain PHP 8 | Server-rendered | 3002 | `php -S localhost:3002 -t public public/index.php` |
| [react-vite](react-vite/) | React 19 + Vite + React Router | Client-side app | 3003 | `npm i && npm run build && npm run preview` |
| [nextjs](nextjs/) | Next.js 16 App Router | Pre-built at build time | 3004 | `npm i && npm run build && npm start` |
| [vue-vite](vue-vite/) | Vue 3 + Vite + Unhead | Client-side app | 3005 | `npm i && npm run build && npm run preview` |
| [nuxt](nuxt/) | Nuxt 4 | Server-rendered | 3006 | `npm i && npm run build && npm start` |
| [sveltekit](sveltekit/) | SvelteKit 3 (Svelte 5) | Server-rendered + partly pre-built | 3007 | `npm i && npm run build && npm start` |
| [astro](astro/) | Astro 7 | Static files | 3008 | `npm i && npm run build && npm run preview` |
| [angular](angular/) | Angular 22 | Client-side app | 3009 | `npm i && npm run build && npm run serve:dist` |
| [flask](flask/) | Python Flask 3.1 + Jinja2 | Server-rendered | 3010 | `pip install -r requirements.txt && python app.py` |

Requirements: Node 22.18+ (Angular needs 22.22.3+), Python 3.9+, and PHP 8+ for the PHP site.

Canonical, Open Graph and sitemap URLs default to `http://localhost:<port>`. Each README says how
to change the base URL (usually a `SITE_URL` setting) when deploying somewhere else.

## Intentional SEO issues (expected findings)

Every site deliberately contains three problems. Everything else should audit clean, so any
other finding means a tool bug or a site bug.

| Site | URL | Issue |
|---|---|---|
| html-static | `/privacy/` | Missing meta description |
| html-static | `/about/` | Image without `alt` |
| html-static | `/menu/butter-croissant/` | Broken internal link to `/menu/croissant-old` (404) |
| php | `/products/summit-40l-backpack`, `/products/ridgeline-hiking-boots` | Duplicate `<title>` |
| php | `/faq` | No `<h1>` |
| php | `/privacy` | `noindex` but listed in `sitemap.xml` |
| react-vite | `/services/web-design` | Title is 102 characters |
| react-vite | `/about` | Two `<h1>` |
| react-vite | `/blog` | Canonical points to the home page |
| nextjs | `/pricing` | Meta description is 273 characters |
| nextjs | `/blog/cash-flow-forecasting-basics` | Heading skip: `h1` → `h4` |
| nextjs | `/contact` | Missing `og:image` |
| vue-vite | `/faq` | Missing canonical |
| vue-vite | `/plants/fiddle-leaf-fig` | Image without `alt` |
| vue-vite | `/` | "click here" link text |
| nuxt | `/blog/beat-jet-lag` | Thin content (about 38 words) |
| nuxt | `/destinations/lisbon`, `/destinations/patagonia` | Duplicate meta description |
| nuxt | `/blog` | Broken internal link to `/blog/iceland-ring-road-diary` |
| sveltekit | `/privacy` | No `<title>` |
| sveltekit | `/classes/hiit-blast` | `noindex` |
| sveltekit | `/` | Hero image missing `width`/`height` |
| astro | `/blog/why-we-moved-to-static-site-generation` | Broken external link to `https://example.invalid/...` |
| astro | `/blog/writing-accessible-forms` | No JSON-LD |
| astro | `/docs`, `/blog` | Same `<h1>` text on both pages |
| angular | `/services/teeth-whitening` | Missing meta description |
| angular | `/about` | Relative canonical (`/about`) |
| angular | `/careers` | Only reachable through a JS click handler; no `<a href>` points to it, but it is in the sitemap |
| flask | `/legacy-books` | Redirect chain: 302 → `/old-books`, 302 → `/books` |
| flask | `/privacy` | `<html>` has no `lang` |
| flask | `/about` | Mixed content: `http://` image |

## Framework behaviour worth testing

These are not planted defects, but they are where SEO tools often get things wrong:

- **Client-side apps (react-vite, vue-vite, angular):** the raw HTML only has default tags; the
  real title, description, canonical and JSON-LD appear after JavaScript runs. A tool that does
  not render JavaScript will see every page as the same.
- **Soft 404s:** the three client-side apps return HTTP 200 for unknown URLs. The "not found"
  page is marked `noindex`. Every other site returns a real 404.
- **JSON-LD in the body:** react-vite puts its JSON-LD `<script>` inside `<main>`, not `<head>`.
  Search engines accept that.
- **Nuxt 404s depend on the `Accept` header:** the status is always 404, but the body is HTML
  only when the request accepts `text/html`; `Accept: */*` gets JSON.
- **Trailing slashes:** html-static uses `/about/` and redirects `/about` to it with a 301.
  php also uses 301s, redirecting `/about/` to `/about`. On astro, `/about/` is a 404. Next.js
  writes the home canonical without a slash.
