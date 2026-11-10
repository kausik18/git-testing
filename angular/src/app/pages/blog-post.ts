import { Component, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SITE_NAME } from '../../environments/environment';
import { Post, posts } from '../data';
import { SeoService, absoluteUrl, breadcrumbJsonLd, pageTitle } from '../seo.service';
import { Breadcrumbs, Crumb } from './breadcrumbs';
import { NotFoundPage } from './not-found';

@Component({
  selector: 'app-blog-post',
  imports: [RouterLink, DatePipe, Breadcrumbs, NotFoundPage],
  template: `
    @if (post(); as p) {
      <app-breadcrumbs [items]="crumbs()" />
      <article>
        <h1>{{ p.title }}</h1>
        <p class="meta">
          By {{ p.author }} · <time [attr.datetime]="p.datePublished">{{ p.datePublished | date: 'longDate' }}</time>
        </p>
        <img [src]="p.image.src" [alt]="p.image.alt" [width]="p.image.width" [height]="p.image.height" />
        @for (section of p.sections; track section.heading) {
          <section>
            <h2>{{ section.heading }}</h2>
            @for (para of section.paragraphs; track $index) {
              <p>{{ para }}</p>
            }
          </section>
        }
        <p><a routerLink="/blog">Back to all blog articles</a></p>
      </article>
    } @else {
      <app-not-found />
    }
  `,
})
export class BlogPostPage {
  private readonly seo = inject(SeoService);
  protected readonly post = signal<Post | undefined>(undefined);
  protected readonly crumbs = signal<Crumb[]>([]);

  constructor() {
    inject(ActivatedRoute)
      .paramMap.pipe(takeUntilDestroyed())
      .subscribe((params) => {
        const p = posts.find((x) => x.slug === params.get('slug'));
        this.post.set(p);
        if (!p) return;
        const path = `/blog/${p.slug}`;
        const crumbs: Crumb[] = [
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: p.title, path },
        ];
        this.crumbs.set(crumbs);
        this.seo.update({
          title: pageTitle(p.seoTitle),
          description: p.description,
          path,
          image: p.image.src,
          type: 'article',
          jsonLd: [
            {
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: p.title,
              description: p.description,
              datePublished: p.datePublished,
              author: { '@type': 'Person', name: p.author },
              image: absoluteUrl(p.image.src),
              mainEntityOfPage: absoluteUrl(path),
              publisher: {
                '@type': 'Organization',
                name: SITE_NAME,
                logo: { '@type': 'ImageObject', url: absoluteUrl('/favicon.svg') },
              },
            },
            breadcrumbJsonLd(crumbs),
          ],
        });
      });
  }
}
