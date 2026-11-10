import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_NAME } from '../../environments/environment';
import { clinic, images, posts, services } from '../data';
import { SeoService, absoluteUrl, pageTitle } from '../seo.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div>
        <h1>Gentle, Modern Dentistry in the Heart of Riverton</h1>
        <p class="lead">
          CityCare Dental Clinic has looked after families on Harbor Avenue since 2009. From routine check-ups to
          dental implants, we combine up-to-date technology with an unhurried, friendly approach.
        </p>
        <p><a routerLink="/contact" class="button">Book an appointment</a></p>
      </div>
      <img [src]="images.hero.src" [alt]="images.hero.alt" [width]="images.hero.width" [height]="images.hero.height" />
    </section>

    <section>
      <h2>Why patients choose CityCare</h2>
      <p>
        Visiting the dentist should never feel rushed or intimidating. Every appointment at CityCare starts with a
        conversation about your goals and any worries you have, and we explain each step before we begin. Our
        clinicians block out generous appointment times so there is always room for questions.
      </p>
      <p>
        We invest in technology that makes treatment more comfortable and more accurate: low-dose digital X-rays,
        intra-oral cameras that let you see exactly what we see, 3D cone-beam scanning for implant planning and
        digital impressions instead of messy trays. We are in-network with most major insurers and offer an in-house
        membership plan for patients without coverage.
      </p>
      <ul class="feature-list">
        <li>Same-day emergency appointments, every weekday</li>
        <li>Evening appointments until 6 pm Monday to Thursday</li>
        <li>Sedation options for nervous patients</li>
        <li>Free validated parking behind the building</li>
      </ul>
    </section>

    <section>
      <h2>Our dental services</h2>
      <div class="cards">
        @for (s of services; track s.slug) {
          <article class="card">
            <h3><a [routerLink]="['/services', s.slug]">{{ s.name }}</a></h3>
            <p>{{ s.summary }}</p>
          </article>
        }
      </div>
      <p><a routerLink="/services">Browse all dental services</a></p>
    </section>

    <section>
      <h2>Latest from our blog</h2>
      <ul class="post-list">
        @for (p of posts; track p.slug) {
          <li>
            <h3><a [routerLink]="['/blog', p.slug]">{{ p.title }}</a></h3>
            <p>{{ p.excerpt }}</p>
          </li>
        }
      </ul>
    </section>
  `,
})
export class HomePage {
  protected readonly images = images;
  protected readonly services = services;
  protected readonly posts = posts;

  constructor() {
    inject(SeoService).update({
      title: pageTitle('Family Dentist in Riverton'),
      description:
        'CityCare Dental Clinic offers gentle family dentistry, cleanings, implants and whitening in Riverton, OR. New patients and emergencies welcome.',
      path: '/',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Dentist',
          '@id': absoluteUrl('/#dentist'),
          name: SITE_NAME,
          url: absoluteUrl('/'),
          logo: absoluteUrl('/favicon.svg'),
          image: absoluteUrl(images.hero.src),
          telephone: clinic.phone,
          email: clinic.email,
          priceRange: '$$',
          address: {
            '@type': 'PostalAddress',
            streetAddress: clinic.street,
            addressLocality: clinic.city,
            addressRegion: clinic.region,
            postalCode: clinic.postalCode,
            addressCountry: clinic.country,
          },
          openingHours: clinic.hours.map((h) => h.schema),
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: SITE_NAME,
          url: absoluteUrl('/'),
          publisher: { '@id': absoluteUrl('/#dentist') },
        },
      ],
    });
  }
}
