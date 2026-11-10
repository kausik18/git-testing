import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SITE_NAME } from '../../environments/environment';
import { Service, services } from '../data';
import { SeoService, absoluteUrl, breadcrumbJsonLd, pageTitle } from '../seo.service';
import { Breadcrumbs, Crumb } from './breadcrumbs';
import { NotFoundPage } from './not-found';

@Component({
  selector: 'app-service-detail',
  imports: [RouterLink, Breadcrumbs, NotFoundPage],
  template: `
    @if (service(); as s) {
      <app-breadcrumbs [items]="crumbs()" />
      <article>
        <h1>{{ s.name }}</h1>
        <p class="lead">{{ s.summary }}</p>
        <img [src]="s.image.src" [alt]="s.image.alt" [width]="s.image.width" [height]="s.image.height" />
        <dl class="facts">
          <dt>Price</dt>
          <dd>{{ s.price }}</dd>
          <dt>Treatment time</dt>
          <dd>{{ s.duration }}</dd>
        </dl>

        <section>
          <h2>About this treatment</h2>
          @for (para of s.intro; track $index) {
            <p>{{ para }}</p>
          }
        </section>

        <section>
          <h2>What to expect</h2>
          <ol>
            @for (step of s.steps; track $index) {
              <li>{{ step }}</li>
            }
          </ol>
        </section>

        <section>
          <h2>Aftercare</h2>
          <ul>
            @for (tip of s.aftercare; track $index) {
              <li>{{ tip }}</li>
            }
          </ul>
        </section>

        <p><a routerLink="/contact">Book a consultation for {{ s.name.toLowerCase() }}</a></p>
      </article>
    } @else {
      <app-not-found />
    }
  `,
})
export class ServiceDetailPage {
  private readonly seo = inject(SeoService);
  protected readonly service = signal<Service | undefined>(undefined);
  protected readonly crumbs = signal<Crumb[]>([]);

  constructor() {
    inject(ActivatedRoute)
      .paramMap.pipe(takeUntilDestroyed())
      .subscribe((params) => {
        const s = services.find((x) => x.slug === params.get('slug'));
        this.service.set(s);
        if (!s) return; // <app-not-found> sets its own head tags
        const path = `/services/${s.slug}`;
        const crumbs: Crumb[] = [
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: s.name, path },
        ];
        this.crumbs.set(crumbs);
        this.seo.update({
          title: pageTitle(s.seoTitle),
          description: s.description,
          omitMetaDescription: s.omitMetaDescription,
          path,
          image: s.image.src,
          jsonLd: [
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: s.name,
              serviceType: s.name,
              description: s.description,
              image: absoluteUrl(s.image.src),
              url: absoluteUrl(path),
              provider: { '@type': 'Dentist', name: SITE_NAME, url: absoluteUrl('/') },
              areaServed: 'Riverton, OR',
            },
            breadcrumbJsonLd(crumbs),
          ],
        });
      });
  }
}
