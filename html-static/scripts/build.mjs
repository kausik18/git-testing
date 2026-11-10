// Renders every page of the static site from data.mjs into public/.
// Usage: node scripts/build.mjs            (SITE_URL defaults to http://localhost:3001)
//        SITE_URL=https://example.com node scripts/build.mjs
// The generated files are committed, so the site can be served without running this.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { business, nav, footerLinks, images, pages, menuItems, posts } from '../data.mjs';

const SITE_URL = (process.env.SITE_URL || 'http://localhost:3001').replace(/\/+$/, '');
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'public');
const LASTMOD = '2026-11-01';
const YEAR = '2026';

const abs = (path) => SITE_URL + path;
const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const jsonLd = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;

function write(rel, content) {
  const file = join(OUT, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
}

function img(key, alt, cls = '') {
  const i = images[key];
  const altAttr = alt === null ? '' : ` alt="${esc(alt)}"`;
  const clsAttr = cls ? ` class="${cls}"` : '';
  return `<img src="/images/${key}.svg"${altAttr} width="${i.w}" height="${i.h}"${clsAttr}>`;
}

function sectionsHtml(sections) {
  return sections
    .map((s) => {
      let html = `<section>\n<h2>${esc(s.h2)}</h2>\n`;
      html += (s.paragraphs || []).map((p) => `<p>${esc(p)}</p>`).join('\n');
      for (const sub of s.subsections || []) {
        html += `\n<h3>${esc(sub.h3)}</h3>\n<p>${esc(sub.text)}</p>`;
      }
      return html + '\n</section>';
    })
    .join('\n');
}

function breadcrumbs(trail) {
  const items = trail
    .map((c, i) =>
      i === trail.length - 1
        ? `<li><span aria-current="page">${esc(c.name)}</span></li>`
        : `<li><a href="${c.path}">${esc(c.name)}</a></li>`,
    )
    .join('');
  return `<nav class="breadcrumb" aria-label="Breadcrumb"><ol>${items}</ol></nav>`;
}

function breadcrumbLd(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

const organizationRef = {
  '@type': 'Organization',
  name: business.name,
  url: abs('/'),
  logo: { '@type': 'ImageObject', url: abs('/favicon.svg') },
};

function layout({ path, title, description, socialDescription, ogType = 'website', image = 'og-default', ld = [], body, noindex = false }) {
  const desc = description ?? socialDescription;
  const imageUrl = abs(`/images/${image}.svg`);
  const head = [
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    `<title>${esc(title)}</title>`,
    description ? `<meta name="description" content="${esc(description)}">` : null,
    noindex ? '<meta name="robots" content="noindex, follow">' : null,
    path ? `<link rel="canonical" href="${abs(path)}">` : null,
    '<link rel="icon" href="/favicon.svg" type="image/svg+xml">',
    '<link rel="stylesheet" href="/css/styles.css">',
    `<meta property="og:site_name" content="${esc(business.name)}">`,
    `<meta property="og:type" content="${ogType}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(desc)}">`,
    path ? `<meta property="og:url" content="${abs(path)}">` : null,
    `<meta property="og:image" content="${imageUrl}">`,
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:title" content="${esc(title)}">`,
    `<meta name="twitter:description" content="${esc(desc)}">`,
    `<meta name="twitter:image" content="${imageUrl}">`,
    ...ld.map(jsonLd),
    '<script src="/js/main.js" defer></script>',
  ]
    .filter(Boolean)
    .join('\n');

  const navItems = nav
    .map((n) => {
      const current = path && (n.href === path || (n.href !== '/' && path.startsWith(n.href)));
      return `<li><a href="${n.href}"${current ? ' aria-current="page"' : ''}>${esc(n.label)}</a></li>`;
    })
    .join('\n');

  const hours = business.hours.map((h) => `<li>${esc(h.days)}: ${esc(h.time)}</li>`).join('\n');
  const flinks = footerLinks.map((n) => `<li><a href="${n.href}">${esc(n.label)}</a></li>`).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
${head}
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
<div class="container header-inner">
<a class="brand" href="/">Brightside <span>Bakery</span></a>
<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
<nav id="site-nav" class="site-nav" aria-label="Main">
<ul>
${navItems}
</ul>
</nav>
</div>
</header>
<main id="main" class="container">
${body}
</main>
<footer class="site-footer">
<div class="container footer-grid">
<div>
<p class="footer-title">${esc(business.name)}</p>
<address>${esc(business.street)}<br>${esc(business.city)}, ${esc(business.region)} ${esc(business.postalCode)}<br><a href="tel:${business.phone}">${esc(business.phoneDisplay)}</a></address>
</div>
<div>
<p class="footer-title">Opening hours</p>
<ul class="plain">
${hours}
</ul>
</div>
<nav aria-label="Footer">
<p class="footer-title">Explore</p>
<ul class="plain">
${flinks}
</ul>
</nav>
</div>
<p class="container copyright">&copy; ${YEAR} ${esc(business.legalName)}. All rights reserved.</p>
</footer>
</body>
</html>
`;
}

const report = [];
function page(rel, opts) {
  const html = layout(opts);
  write(rel, html);
  const text = opts.body.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ');
  const words = text.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
  report.push({
    url: opts.path ?? '(404)',
    title: opts.title.length,
    desc: opts.description ? opts.description.length : 0,
    words,
  });
}

function productCard(item) {
  return `<article class="card">
${img(item.image, item.name)}
<h3><a href="/menu/${item.slug}/">${esc(item.name)}</a></h3>
<p>${esc(item.summary)}</p>
<p class="price">$${item.price}</p>
</article>`;
}

function postCard(post) {
  return `<article class="card">
${img(post.image, post.headline)}
<h3><a href="/blog/${post.slug}/">${esc(post.headline)}</a></h3>
<p class="meta"><time datetime="${post.datePublished}">${esc(post.dateDisplay)}</time> &middot; ${esc(post.author)}</p>
<p>${esc(post.excerpt)}</p>
</article>`;
}

const hoursList = `<ul class="hours">\n${business.hours
  .map((h) => `<li><strong>${esc(h.days)}</strong>: ${esc(h.time)}</li>`)
  .join('\n')}\n</ul>`;

// ---------- Home ----------
{
  const p = pages.home;
  const body = `<section class="hero">
<div>
<h1>${esc(p.h1)}</h1>
<p class="lead">${esc(p.intro)}</p>
<p class="actions"><a class="button" href="/menu/">See today's menu</a> <a class="button secondary" href="/contact/">Plan your visit</a></p>
</div>
${img('hero-counter', 'The Brightside Bakery counter stacked with fresh loaves and pastries', 'hero-img')}
</section>
${sectionsHtml(p.sections)}
<section>
<h2>${esc(p.featuredHeading)}</h2>
<div class="grid">
${menuItems.map(productCard).join('\n')}
</div>
</section>
<section>
<h2>${esc(p.blogHeading)}</h2>
<div class="grid">
${posts.map(postCard).join('\n')}
</div>
</section>
<section>
<h2>${esc(p.visitHeading)}</h2>
<p>${esc(p.visitText)}</p>
${hoursList}
</section>`;
  const openingHoursSpecification = business.hours
    .filter((h) => h.spec)
    .map((h) => h.spec);
  page('index.html', {
    path: '/',
    title: p.title,
    description: p.description,
    body,
    ld: [
      {
        '@context': 'https://schema.org',
        '@type': 'Bakery',
        '@id': abs('/#bakery'),
        name: business.name,
        url: abs('/'),
        logo: abs('/favicon.svg'),
        image: abs('/images/hero-counter.svg'),
        description: p.description,
        telephone: business.phone,
        email: business.email,
        priceRange: '$',
        servesCuisine: 'Bakery',
        foundingDate: business.founded,
        openingHours: openingHoursSpecification,
        address: {
          '@type': 'PostalAddress',
          streetAddress: business.street,
          addressLocality: business.city,
          addressRegion: business.region,
          postalCode: business.postalCode,
          addressCountry: business.country,
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: business.name,
        url: abs('/'),
        publisher: { '@id': abs('/#bakery') },
      },
    ],
  });
}

// ---------- About ----------
{
  const p = pages.about;
  const [first, ...rest] = p.sections;
  const body = `<h1>${esc(p.h1)}</h1>
${img('team', 'Brightside Bakery bakers shaping sourdough loaves at the bench')}
${sectionsHtml([first])}
${sectionsHtml(rest.slice(0, -1))}
<section>
<h2>${esc(rest[rest.length - 1].h2)}</h2>
${img('oven', null) /* INTENTIONAL SEO DEFECT: image without alt attribute */}
${rest[rest.length - 1].paragraphs.map((t) => `<p>${esc(t)}</p>`).join('\n')}
</section>
<p><a class="button" href="/menu/">Explore our menu</a></p>`;
  page('about/index.html', { path: '/about/', title: p.title, description: p.description, body });
}

// ---------- Menu listing ----------
{
  const p = pages.menu;
  const body = `<h1>${esc(p.h1)}</h1>
${p.intro.map((t) => `<p>${esc(t)}</p>`).join('\n')}
<section>
<h2>${esc(p.listHeading)}</h2>
<div class="grid">
${menuItems.map(productCard).join('\n')}
</div>
</section>`;
  page('menu/index.html', { path: '/menu/', title: p.title, description: p.description, body });
}

// ---------- Menu detail pages ----------
for (const item of menuItems) {
  const path = `/menu/${item.slug}/`;
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu/' },
    { name: item.name, path },
  ];
  const others = menuItems.filter((m) => m.slug !== item.slug);
  const legacy = item.legacyLink
    ? `\n<p>Curious how this pastry has changed over the years? Read about <a href="${item.legacyLink.href}">${esc(item.legacyLink.text)}</a>.</p>`
    : '';
  const body = `${breadcrumbs(trail)}
<article class="product">
<div class="product-top">
${img(item.image, `${item.name} from Brightside Bakery`)}
<div>
<h1>${esc(item.name)}</h1>
<p class="lead">${esc(item.summary)}</p>
<p class="price">$${item.price}</p>
<p class="allergens"><strong>Allergens:</strong> ${esc(item.allergens)}</p>
</div>
</div>
${sectionsHtml(item.sections)}${legacy}
</article>
<section>
<h2>More from our menu</h2>
<ul>
${others.map((o) => `<li><a href="/menu/${o.slug}/">${esc(o.name)}</a></li>`).join('\n')}
</ul>
<p><a href="/menu/">Back to the full menu</a></p>
</section>`;
  page(`menu/${item.slug}/index.html`, {
    path,
    title: item.title,
    description: item.description,
    image: item.image,
    body,
    ld: [
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: item.name,
        description: item.description,
        image: abs(`/images/${item.image}.svg`),
        sku: `BSB-${item.slug.toUpperCase()}`,
        brand: { '@type': 'Brand', name: business.name },
        offers: {
          '@type': 'Offer',
          url: abs(path),
          price: item.price,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      },
      breadcrumbLd(trail),
    ],
  });
}

// ---------- Blog index ----------
{
  const p = pages.blog;
  const body = `<h1>${esc(p.h1)}</h1>
${p.intro.map((t) => `<p>${esc(t)}</p>`).join('\n')}
<section>
<h2>${esc(p.listHeading)}</h2>
<div class="grid">
${posts.map(postCard).join('\n')}
</div>
</section>`;
  page('blog/index.html', { path: '/blog/', title: p.title, description: p.description, body });
}

// ---------- Blog posts ----------
for (const post of posts) {
  const path = `/blog/${post.slug}/`;
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog/' },
    { name: post.headline, path },
  ];
  const others = posts.filter((o) => o.slug !== post.slug);
  const body = `${breadcrumbs(trail)}
<article class="post">
<h1>${esc(post.headline)}</h1>
<p class="meta">By ${esc(post.author)} &middot; <time datetime="${post.datePublished}">${esc(post.dateDisplay)}</time></p>
${img(post.image, post.headline)}
${sectionsHtml(post.sections)}
</article>
<section>
<h2>Keep reading</h2>
<ul>
${others.map((o) => `<li><a href="/blog/${o.slug}/">${esc(o.headline)}</a></li>`).join('\n')}
</ul>
<p><a href="/blog/">All blog articles</a></p>
</section>`;
  page(`blog/${post.slug}/index.html`, {
    path,
    title: post.title,
    description: post.description,
    ogType: 'article',
    image: post.image,
    body,
    ld: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.headline,
        description: post.description,
        image: abs(`/images/${post.image}.svg`),
        datePublished: post.datePublished,
        dateModified: post.datePublished,
        author: { '@type': 'Person', name: post.author },
        publisher: organizationRef,
        mainEntityOfPage: abs(path),
      },
      breadcrumbLd(trail),
    ],
  });
}

// ---------- Contact ----------
{
  const p = pages.contact;
  const body = `<h1>${esc(p.h1)}</h1>
${p.intro.map((t) => `<p>${esc(t)}</p>`).join('\n')}
<div class="two-col">
<section>
<h2>${esc(p.formHeading)}</h2>
<p>${esc(p.formNote)}</p>
<form class="contact-form" action="#" method="post" data-demo-form>
<label for="name">Name</label>
<input id="name" name="name" type="text" autocomplete="name" required>
<label for="email">Email</label>
<input id="email" name="email" type="email" autocomplete="email" required>
<label for="topic">Topic</label>
<select id="topic" name="topic">
<option>General question</option>
<option>Reserve bread</option>
<option>Catering order</option>
</select>
<label for="message">Message</label>
<textarea id="message" name="message" rows="5" required></textarea>
<button class="button" type="submit">Send message</button>
<p class="form-status" role="status" aria-live="polite"></p>
</form>
</section>
<section>
<h2>${esc(p.hoursHeading)}</h2>
${hoursList}
<h2>${esc(p.findHeading)}</h2>
<p>${esc(p.findText)}</p>
<address>${esc(business.street)}, ${esc(business.city)}, ${esc(business.region)} ${esc(business.postalCode)}<br>
Phone: <a href="tel:${business.phone}">${esc(business.phoneDisplay)}</a><br>
Email: <a href="mailto:${business.email}">${esc(business.email)}</a></address>
</section>
</div>`;
  page('contact/index.html', { path: '/contact/', title: p.title, description: p.description, body });
}

// ---------- FAQ ----------
{
  const p = pages.faq;
  const body = `<h1>${esc(p.h1)}</h1>
<p>${esc(p.intro)}</p>
<div class="faq">
${p.items.map((f) => `<section>\n<h2>${esc(f.q)}</h2>\n<p>${esc(f.a)}</p>\n</section>`).join('\n')}
</div>
<p>Still have a question? <a href="/contact/">Contact the bakery</a>.</p>`;
  page('faq/index.html', {
    path: '/faq/',
    title: p.title,
    description: p.description,
    body,
    ld: [
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: p.items.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  });
}

// ---------- Privacy (no meta description: intentional defect) ----------
{
  const p = pages.privacy;
  const body = `<h1>${esc(p.h1)}</h1>
<p class="meta">Last updated: <time datetime="${p.updated}">August 1, 2026</time></p>
${sectionsHtml(p.sections)}`;
  page('privacy/index.html', {
    path: '/privacy/',
    title: p.title,
    description: p.description,
    socialDescription: p.socialDescription,
    body,
  });
}

// ---------- 404 ----------
{
  const p = pages.notFound;
  const body = `<h1>${esc(p.h1)}</h1>
<p>${esc(p.text)}</p>
<ul>
${footerLinks.map((n) => `<li><a href="${n.href}">${esc(n.label)}</a></li>`).join('\n')}
</ul>`;
  page('404.html', { path: null, title: p.title, description: p.description, body, noindex: true });
}

// ---------- robots.txt + sitemap.xml ----------
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${abs('/sitemap.xml')}\n`);

const sitemapEntries = [
  ['/', LASTMOD],
  ['/about/', LASTMOD],
  ['/menu/', LASTMOD],
  ...menuItems.map((m) => [`/menu/${m.slug}/`, LASTMOD]),
  ['/blog/', LASTMOD],
  ...posts.map((p) => [`/blog/${p.slug}/`, p.datePublished]),
  ['/contact/', LASTMOD],
  ['/faq/', LASTMOD],
  ['/privacy/', LASTMOD],
];
write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(([p, d]) => `  <url><loc>${abs(p)}</loc><lastmod>${d}</lastmod></url>`).join('\n')}
</urlset>
`,
);

// ---------- Placeholder images + favicon ----------
for (const [key, i] of Object.entries(images)) {
  const size = Math.round(Math.min(i.w, i.h) / 9);
  write(
    `images/${key}.svg`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="${i.w}" height="${i.h}" viewBox="0 0 ${i.w} ${i.h}">
<rect width="100%" height="100%" fill="${i.bg}"/>
<circle cx="${i.w * 0.85}" cy="${i.h * 0.2}" r="${size * 1.5}" fill="${i.fg}" opacity="0.15"/>
<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Georgia, serif" font-size="${size}" fill="${i.fg}">${esc(i.label)}</text>
</svg>
`,
  );
}
write(
  'favicon.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<rect width="64" height="64" rx="14" fill="#e07a3f"/>
<circle cx="32" cy="32" r="16" fill="#fff8ef"/>
<circle cx="32" cy="32" r="8" fill="#f2c48d"/>
</svg>
`,
);

console.log(`Built ${report.length} pages for ${SITE_URL}`);
console.table(report);
