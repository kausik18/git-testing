# Bookworm Bookstore — Flask + Jinja2 (server-rendered)

Test site #10 for the SEO crawler. A fictional independent bookshop rendered entirely on the server
with Flask and Jinja2 templates. Every page's HTML, including all SEO tags, is in the initial
response.

- **Framework:** Flask 3.1.3 (Werkzeug 3.1, Jinja2 3.1)
- **Python:** 3.9+ (tested with 3.9.13)
- **Rendering mode:** server-side rendering (Jinja2 templates)
- **Port:** 3010

## Commands

```bash
python -m venv .venv
# Windows: .venv\Scripts\activate    macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
python app.py                         # http://localhost:3010
# or: flask --app app run --port 3010
```

Environment variables:

| Variable | Default | Purpose |
|----------|---------|---------|
| `SITE_URL` | `http://localhost:3010` | Base for canonical, `og:url`, `og:image`, JSON-LD, sitemap and robots URLs |
| `PORT` | `3010` | Port used by `python app.py` |
| `FLASK_DEBUG` | unset | Set to `1` for the debug reloader |

## Structure

```
app.py              routes, SEO helpers, sitemap/robots, 404 handler
data.py             all content (store info, books, blog posts, FAQs)
templates/
  base.html         layout; head SEO tags in {% block seo %}, <html lang> in {% block html_lang %}
  _macros.html      breadcrumbs + img macros
  *.html            one template per page, 404.html, sitemap.xml
static/
  css/style.css
  images/*.svg      local SVG placeholders
  favicon.svg       also served at /favicon.svg
```

Each view passes a `seo` dict (title, description, absolute canonical, OG/Twitter image, `og:type`,
JSON-LD list, optional robots) to `base.html`. JSON-LD: Home `BookStore` + `WebSite`; book pages
`Product` (with `Offer`) + `BreadcrumbList`; blog posts `BlogPosting` + `BreadcrumbList`; FAQ
`FAQPage`.

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/books` | Book listing |
| `/books/the-lighthouse-keepers-daughter` | Book detail |
| `/books/small-gardens-big-harvests` | Book detail |
| `/books/the-quiet-algorithm` | Book detail |
| `/blog` | Blog index |
| `/blog/staff-picks-autumn-reading` | Blog post |
| `/blog/how-to-start-a-book-club` | Blog post |
| `/contact` | Contact (non-functional form) |
| `/faq` | FAQ |
| `/privacy` | Privacy policy |
| `/legacy-books` | 302 → `/old-books` (intentional) |
| `/old-books` | 302 → `/books` (intentional) |
| `/sitemap.xml` | Generated sitemap (all indexable pages, absolute URLs) |
| `/robots.txt` | Generated robots file referencing the sitemap |
| `/favicon.svg` | Favicon |
| anything else | Custom 404 page, **HTTP 404**, `noindex` (`@app.errorhandler(404)`) |

Unknown slugs such as `/books/unknown` also return the 404 page with status 404.

## Intentional SEO issues

These defects are deliberate. Everything else should audit clean.

1. **302 redirect chain** — `http://localhost:3010/legacy-books` → 302 →
   `http://localhost:3010/old-books` → 302 → `http://localhost:3010/books`.
   Both hops are temporary (302) redirects for what is really a permanent move, and the chain has
   two hops. So a crawler can find it, the home page (`http://localhost:3010/`) has one internal link
   to `/legacy-books` ("See the full book catalogue"). Neither redirecting URL is in the sitemap.
2. **Missing `<html lang>`** — `http://localhost:3010/privacy`
   `privacy.html` overrides `{% block html_lang %}` with nothing, so the page renders `<html>`.
3. **Mixed content (`http://` image URL)** — `http://localhost:3010/about`
   The reading-room image uses a hard-coded absolute `http://` URL
   (`http://<SITE_URL host>/static/images/reading-room.svg`). The scheme is forced to `http://` even
   when `SITE_URL` is `https://`, so the image stays insecure on an HTTPS deployment.
