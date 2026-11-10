# FitPulse Gym (SvelteKit)

Test site #7 for the SEO crawler: a fictional gym built with **SvelteKit 3.2 + Svelte 5.57**
(TypeScript, Vite 8) and served by **@sveltejs/adapter-node 6** as a Node SSR server.

## Rendering mode

SSR + prerender (hybrid):

- Prerendered at build time (`export const prerender = true` in `src/routes/+layout.ts`):
  `/`, `/about`, `/classes`, `/blog`, `/contact`, `/faq`, `/privacy`, `/sitemap.xml`, `/robots.txt`.
- Server-rendered on each request by the Node server (`prerender = false`):
  `/classes/[slug]` and `/blog/[slug]`. Unknown slugs throw `error(404)` and render
  `src/routes/+error.svelte` with HTTP 404; any other unknown URL also returns 404.

## Commands

Requires Node >= 22.17.

```sh
npm install
npm run dev       # dev server on http://localhost:3007
npm run build     # production build into ./build (adapter-node)
npm start         # production server on http://localhost:3007 (node start.js, PORT defaults to 3007)
npm run preview   # vite preview on http://localhost:3007
npm run check     # svelte-check / TypeScript
```

`npm start` runs `start.js`, a tiny cross-platform wrapper that defaults `PORT` to 3007 and then
loads `build/index.js`. `PORT=3007 node build` works too.

## SITE_URL

Canonical, Open Graph, JSON-LD and sitemap URLs are built from the `SITE_URL` environment
variable, declared in `src/env.ts` with SvelteKit 3's `defineEnvVars` (public, read at runtime,
default `http://localhost:3007`) and imported from `$app/env/public`.

Prerendered pages and `sitemap.xml` / `robots.txt` bake the value in at build time, so set it for
both steps when deploying elsewhere:

```sh
SITE_URL=https://fitpulse.example npm run build
SITE_URL=https://fitpulse.example npm start
```

## Routes

| Route | Notes |
|-------|-------|
| `/` | Home: `ExerciseGym` + `WebSite` JSON-LD |
| `/about` | About |
| `/classes` | Class listing |
| `/classes/hiit-blast` | Class detail: `Service` + `BreadcrumbList` (noindex, see below) |
| `/classes/power-yoga` | Class detail: `Service` + `BreadcrumbList` |
| `/classes/spin-cycle` | Class detail: `Service` + `BreadcrumbList` |
| `/blog` | Blog index |
| `/blog/beginners-guide-to-strength-training` | Post: `BlogPosting` + `BreadcrumbList` |
| `/blog/how-to-recover-after-a-hard-workout` | Post: `BlogPosting` + `BreadcrumbList` |
| `/contact` | Contact details + non-functional form |
| `/faq` | FAQ: `FAQPage` JSON-LD |
| `/privacy` | Privacy policy |
| `/sitemap.xml` | `src/routes/sitemap.xml/+server.ts` |
| `/robots.txt` | `src/routes/robots.txt/+server.ts` |
| anything else | Custom 404 (`+error.svelte`, HTTP 404) |

## Structure

```
src/
  app.html              lang, charset, viewport, favicon (no <title>)
  env.ts                SITE_URL definition
  lib/data.ts           all content (business, classes, posts, FAQs)
  lib/Seo.svelte        <svelte:head>: title, description, canonical, OG, Twitter, JSON-LD
  lib/schema.ts         JSON-LD builders
  lib/Breadcrumbs.svelte
  routes/               pages, +layout.svelte (header/nav/main/footer), +error.svelte
static/                 favicon.svg + SVG placeholder images
```

Subpath imports (`#lib/*` in package.json) replace the old `$lib` alias, as SvelteKit 3 expects.

## Intentional SEO issues

These are deliberate. Everything else should pass.

| Issue | URL | Where |
|-------|-----|-------|
| Missing `<title>` element | `http://localhost:3007/privacy` | `src/routes/privacy/+page.svelte` passes no `title` to `Seo`; no layout-level default exists. |
| `<meta name="robots" content="noindex, follow">` on a class page | `http://localhost:3007/classes/hiit-blast` | `noindex: true` in `src/lib/data.ts`. The page is left out of `sitemap.xml` so the noindex isn't also a sitemap conflict. It is still linked from `/` and `/classes`. |
| Image missing `width`/`height` | `http://localhost:3007/` | Hero image `/images/hero.svg` in `src/routes/+page.svelte`. |
