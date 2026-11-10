import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SITE_NAME, SITE_URL } from '../environments/environment';
import { images } from './data';

export interface SeoConfig {
  /** Full document title, e.g. "About Us | CityCare Dental Clinic". */
  title: string;
  /** Meta / Open Graph / Twitter description. */
  description: string;
  /** Path of the page, e.g. "/about". Used for canonical and og:url. */
  path: string;
  /** Image path for og:image / twitter:image. Defaults to the site OG image. */
  image?: string;
  type?: 'website' | 'article';
  /** JSON-LD objects to inject as <script type="application/ld+json">. */
  jsonLd?: object[];
  /** Optional robots directive, e.g. "noindex" for the 404 page. */
  robots?: string;
  /** INTENTIONAL SEO DEFECT hook: skip <meta name="description">. */
  omitMetaDescription?: boolean;
  /** INTENTIONAL SEO DEFECT hook: raw canonical href (e.g. a relative URL). */
  canonicalHref?: string;
}

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return SITE_URL + (path.startsWith('/') ? path : '/' + path);
}

export function pageTitle(name: string): string {
  return `${name} | ${SITE_NAME}`;
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/**
 * Sets per-route head tags on the client: <title>, description, canonical,
 * Open Graph, Twitter Card, robots and JSON-LD.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  update(cfg: SeoConfig): void {
    const url = absoluteUrl(cfg.path);
    const image = absoluteUrl(cfg.image ?? images.og.src);

    this.title.setTitle(cfg.title);

    if (cfg.omitMetaDescription) {
      this.meta.removeTag('name="description"');
    } else {
      this.meta.updateTag({ name: 'description', content: cfg.description });
    }

    if (cfg.robots) {
      this.meta.updateTag({ name: 'robots', content: cfg.robots });
    } else {
      this.meta.removeTag('name="robots"');
    }

    this.meta.updateTag({ property: 'og:title', content: cfg.title });
    this.meta.updateTag({ property: 'og:description', content: cfg.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: cfg.type ?? 'website' });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: cfg.title });
    this.meta.updateTag({ name: 'twitter:description', content: cfg.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.setCanonical(cfg.canonicalHref ?? url);
    this.setJsonLd(cfg.jsonLd ?? []);
  }

  private setCanonical(href: string): void {
    let link = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    // setAttribute keeps the value exactly as given (link.href would resolve it).
    link.setAttribute('href', href);
  }

  private setJsonLd(items: object[]): void {
    this.doc.head
      .querySelectorAll('script[type="application/ld+json"][data-seo]')
      .forEach((el) => el.remove());
    for (const item of items) {
      const script = this.doc.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', '');
      script.textContent = JSON.stringify(item);
      this.doc.head.appendChild(script);
    }
  }
}
