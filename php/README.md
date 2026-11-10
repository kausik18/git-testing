# Summit Hiking Gear (php)

Site 2 of the SEO test sites. An outdoor gear shop built with **plain PHP 8** (no framework, no
Composer dependencies): a front controller, a tiny router, shared partials and one data file.

- **Rendering mode:** server-rendered on every request (PHP includes)
- **Requires:** PHP 8.0 or newer (uses `str_starts_with`, `str_ends_with`, arrow functions).
  Tested with PHP 8.3.
- **Port:** 3002
- **SITE_URL:** read from the `SITE_URL` environment variable, default `http://localhost:3002`.
  It is used for canonical URLs, Open Graph/Twitter URLs, JSON-LD, `robots.txt` and `sitemap.xml`.

## Run

```bash
cd php
php -S localhost:3002 -t public public/index.php
# or: composer start
# open http://localhost:3002
```

Nothing needs to be installed or built. To use another base URL:

```bash
SITE_URL=https://shop.example.com php -S localhost:3002 -t public public/index.php
```

On Windows PowerShell: `$env:SITE_URL="https://shop.example.com"; php -S localhost:3002 -t public public/index.php`.

With the built-in server, `public/index.php` acts as the router script: real files in `public/`
(CSS, JS, images, favicon) are served directly and every other request goes through the router.
For Apache, `public/.htaccess` rewrites non-file requests to `index.php`; point the document root
at `public/`.

URLs have no trailing slash. `/about/` is redirected (301) to `/about`.

## Routes

| Route | View | Notes |
|-------|------|-------|
| `/` | `app/views/home.php` | Home, JSON-LD `SportingGoodsStore` + `WebSite` |
| `/about` | `app/views/about.php` | About |
| `/products` | `app/views/products.php` | Listing page |
| `/products/summit-40l-backpack` | `app/views/product.php` | Dynamic route, `Product` + `BreadcrumbList` |
| `/products/ridgeline-hiking-boots` | `app/views/product.php` | Dynamic route, `Product` + `BreadcrumbList` |
| `/products/alpine-trekking-poles` | `app/views/product.php` | Dynamic route, `Product` + `BreadcrumbList` |
| `/blog` | `app/views/blog.php` | Blog index ("Trail Journal") |
| `/blog/how-to-choose-hiking-boots` | `app/views/post.php` | Dynamic route, `BlogPosting` + `BreadcrumbList` |
| `/blog/ten-essentials-day-hike-checklist` | `app/views/post.php` | Dynamic route, `BlogPosting` + `BreadcrumbList` |
| `/contact` | `app/views/contact.php` | Non-functional contact form |
| `/faq` | `app/views/faq.php` | `FAQPage` |
| `/privacy` | `app/views/privacy.php` | Privacy policy |
| any other path | `app/views/404.php` | Custom 404 page, sent with `http_response_code(404)`, `noindex` |
| `/robots.txt` | `app/robots.php` | Generated dynamically, references the sitemap |
| `/sitemap.xml` | `app/sitemap.php` | Generated dynamically, 12 URLs |
| `/favicon.svg` | `public/favicon.svg` | Static |

## Project structure

```
php/
  composer.json            metadata + "composer start" (no dependencies)
  public/                  document root
    index.php              front controller (also the php -S router script)
    .htaccess              Apache rewrite to index.php
    css/style.css
    js/main.js
    images/*.svg           local placeholder images
    favicon.svg
  app/
    config.php             SITE_URL, helpers (e(), url(), img(), json_ld(), render())
    data.php               all site content (single data file)
    router.php             path -> view mapping, 301 for trailing slashes, 404 handling
    robots.php             dynamic robots.txt
    sitemap.php            dynamic sitemap.xml
    partials/              header.php, footer.php, breadcrumbs.php, sections.php, cards.php
    views/                 one template per page type
```

## Intentional SEO issues

These defects are deliberate so the SEO tool can be checked against them. Everything else
should pass a clean audit.

| # | Issue | URL(s) |
|---|-------|--------|
| 1 | Duplicate `<title>`: both product pages use `Summit 40L Backpack \| Summit Hiking Gear` (the boots page has a copy-paste error) | `http://localhost:3002/products/summit-40l-backpack` and `http://localhost:3002/products/ridgeline-hiking-boots` |
| 2 | Missing `<h1>`: the page heading is an `<h2>` | `http://localhost:3002/faq` |
| 3 | `<meta name="robots" content="noindex, follow">` while the URL is still listed in `sitemap.xml` | `http://localhost:3002/privacy` |

Each defect is marked with an `INTENTIONAL SEO DEFECT` comment in `app/data.php`,
`app/views/faq.php`, `app/views/privacy.php` or `app/sitemap.php`.
