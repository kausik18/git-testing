"""Bookworm Bookstore: a small server-rendered Flask + Jinja2 site for SEO crawler testing."""
import os

from flask import Flask, Response, abort, redirect, render_template, request, send_from_directory, url_for

from data import BOOKS, FAQS, IMAGES, POSTS, SITE_NAME, STORE

SITE_URL = os.environ.get("SITE_URL", "http://localhost:3010").rstrip("/")

app = Flask(__name__)

NAV = [
    ("index", "Home"),
    ("about", "About"),
    ("books", "Books"),
    ("blog", "Blog"),
    ("faq", "FAQ"),
    ("contact", "Contact"),
]


def absolute_url(path):
    """Build an absolute URL from a site-relative path using SITE_URL."""
    if path.startswith(("http://", "https://")):
        return path
    return SITE_URL + (path if path.startswith("/") else "/" + path)


def static_url(filename):
    return url_for("static", filename=filename)


def page_title(name):
    return f"{name} | {SITE_NAME}"


def breadcrumb_ld(crumbs):
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": i + 1, "name": name, "item": absolute_url(path)}
            for i, (name, path) in enumerate(crumbs)
        ],
    }


def seo(title, description, image=None, og_type="website", json_ld=None, robots=None):
    """Head-tag values consumed by templates/base.html."""
    return {
        "title": title,
        "description": description,
        "canonical": absolute_url(request.path),
        "image": absolute_url(static_url(image or IMAGES["og"]["src"])),
        "og_type": og_type,
        "json_ld": json_ld or [],
        "robots": robots,
    }


@app.context_processor
def inject_globals():
    return {"SITE_NAME": SITE_NAME, "STORE": STORE, "NAV": NAV, "IMAGES": IMAGES, "static_url": static_url}


def find(items, slug):
    for item in items:
        if item["slug"] == slug:
            return item
    abort(404)


@app.route("/")
def index():
    json_ld = [
        {
            "@context": "https://schema.org",
            "@type": "BookStore",
            "@id": absolute_url("/#store"),
            "name": SITE_NAME,
            "url": absolute_url("/"),
            "logo": absolute_url("/favicon.svg"),
            "image": absolute_url(static_url(IMAGES["hero"]["src"])),
            "telephone": STORE["phone"],
            "email": STORE["email"],
            "priceRange": "$$",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": STORE["street"],
                "addressLocality": STORE["city"],
                "addressRegion": STORE["region"],
                "postalCode": STORE["postal_code"],
                "addressCountry": STORE["country"],
            },
            "openingHours": [h[2] for h in STORE["hours"]],
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": SITE_NAME,
            "url": absolute_url("/"),
            "publisher": {"@id": absolute_url("/#store")},
        },
    ]
    return render_template(
        "index.html",
        books=BOOKS,
        posts=POSTS,
        seo=seo(
            page_title("Independent Bookshop in Maplewood"),
            "Bookworm Bookstore is Maplewood’s independent bookshop: new and used books, staff picks, author events and a cosy reading café.",
            json_ld=json_ld,
        ),
    )


@app.route("/about")
def about():
    # INTENTIONAL SEO DEFECT (mixed content): this image is referenced with a
    # hard-coded http:// absolute URL, regardless of the scheme of SITE_URL.
    host = SITE_URL.split("://", 1)[-1]
    insecure_image_url = "http://" + host + static_url(IMAGES["reading_room"]["src"])
    return render_template(
        "about.html",
        insecure_image_url=insecure_image_url,
        seo=seo(
            page_title("About Our Bookshop"),
            "Since 1998 Bookworm Bookstore has been Maplewood’s home for readers. Meet our booksellers and discover the story of the shop.",
        ),
    )


@app.route("/books")
def books():
    return render_template(
        "books.html",
        books=BOOKS,
        seo=seo(
            page_title("Browse Our Books"),
            "Browse staff-recommended fiction, non-fiction and science fiction at Bookworm Bookstore, with signed copies and fast ordering.",
        ),
    )


@app.route("/books/<slug>")
def book_detail(slug):
    book = find(BOOKS, slug)
    path = url_for("book_detail", slug=slug)
    crumbs = [("Home", "/"), ("Books", url_for("books")), (book["title"], path)]
    json_ld = [
        {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": book["title"],
            "description": book["description"],
            "image": absolute_url(static_url(book["image"]["src"])),
            "sku": book["isbn"],
            "gtin13": book["isbn"].replace("-", ""),
            "brand": {"@type": "Brand", "name": book["author"]},
            "category": book["genre"],
            "offers": {
                "@type": "Offer",
                "url": absolute_url(path),
                "price": book["price"],
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "seller": {"@type": "Organization", "name": SITE_NAME},
            },
        },
        breadcrumb_ld(crumbs),
    ]
    return render_template(
        "book_detail.html",
        book=book,
        crumbs=crumbs,
        seo=seo(page_title(book["seo_title"]), book["description"], image=book["image"]["src"], json_ld=json_ld),
    )


@app.route("/old-books")
def old_books():
    # INTENTIONAL SEO DEFECT: temporary (302) redirect for a permanently moved page.
    return redirect(url_for("books"), code=302)


@app.route("/legacy-books")
def legacy_books():
    # INTENTIONAL SEO DEFECT: second hop of the redirect chain /legacy-books -> /old-books -> /books.
    return redirect(url_for("old_books"), code=302)


@app.route("/blog")
def blog():
    return render_template(
        "blog.html",
        posts=POSTS,
        seo=seo(
            page_title("Bookshop Blog"),
            "Staff picks, reading lists, book club tips and event news from the booksellers at Bookworm Bookstore in Maplewood.",
        ),
    )


@app.route("/blog/<slug>")
def blog_post(slug):
    post = find(POSTS, slug)
    path = url_for("blog_post", slug=slug)
    crumbs = [("Home", "/"), ("Blog", url_for("blog")), (post["title"], path)]
    json_ld = [
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post["title"],
            "description": post["description"],
            "datePublished": post["date_published"],
            "author": {"@type": "Person", "name": post["author"]},
            "image": absolute_url(static_url(post["image"]["src"])),
            "mainEntityOfPage": absolute_url(path),
            "publisher": {
                "@type": "Organization",
                "name": SITE_NAME,
                "logo": {"@type": "ImageObject", "url": absolute_url("/favicon.svg")},
            },
        },
        breadcrumb_ld(crumbs),
    ]
    return render_template(
        "blog_post.html",
        post=post,
        crumbs=crumbs,
        seo=seo(
            page_title(post["seo_title"]),
            post["description"],
            image=post["image"]["src"],
            og_type="article",
            json_ld=json_ld,
        ),
    )


@app.route("/contact")
def contact():
    return render_template(
        "contact.html",
        seo=seo(
            page_title("Contact Us"),
            "Visit Bookworm Bookstore at 42 Elm Street, Maplewood. Opening hours, phone, email and a form for orders and questions.",
        ),
    )


@app.route("/faq")
def faq():
    json_ld = [
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": f["question"], "acceptedAnswer": {"@type": "Answer", "text": f["answer"]}}
                for f in FAQS
            ],
        }
    ]
    return render_template(
        "faq.html",
        faqs=FAQS,
        seo=seo(
            page_title("Frequently Asked Questions"),
            "Answers about used-book buying, special orders, shipping, author events, gift cards and accessibility at Bookworm Bookstore.",
            json_ld=json_ld,
        ),
    )


@app.route("/privacy")
def privacy():
    return render_template(
        "privacy.html",
        seo=seo(
            page_title("Privacy Policy"),
            "How Bookworm Bookstore collects, uses and protects personal information from website visitors, customers and newsletter readers.",
        ),
    )


@app.route("/favicon.svg")
def favicon():
    return send_from_directory(app.static_folder, "favicon.svg", mimetype="image/svg+xml")


@app.route("/robots.txt")
def robots_txt():
    body = f"User-agent: *\nAllow: /\n\nSitemap: {absolute_url('/sitemap.xml')}\n"
    return Response(body, mimetype="text/plain")


@app.route("/sitemap.xml")
def sitemap_xml():
    paths = [
        url_for("index"),
        url_for("about"),
        url_for("books"),
        *[url_for("book_detail", slug=b["slug"]) for b in BOOKS],
        url_for("blog"),
        *[url_for("blog_post", slug=p["slug"]) for p in POSTS],
        url_for("contact"),
        url_for("faq"),
        url_for("privacy"),
    ]
    xml = render_template("sitemap.xml", urls=[absolute_url(p) for p in paths])
    return Response(xml, mimetype="application/xml")


@app.errorhandler(404)
def not_found(_error):
    return (
        render_template(
            "404.html",
            seo=seo(
                page_title("Page Not Found"),
                "Sorry, we couldn’t find that page at Bookworm Bookstore. Browse our books or head back to the home page.",
                robots="noindex",
            ),
        ),
        404,
    )


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=int(os.environ.get("PORT", "3010")), debug=os.environ.get("FLASK_DEBUG") == "1")
