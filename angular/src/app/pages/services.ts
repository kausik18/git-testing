import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { services } from '../data';
import { SeoService, pageTitle } from '../seo.service';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  template: `
    <h1>Our Dental Services</h1>
    <p class="lead">
      From preventive cleanings to permanent tooth replacement, CityCare provides comprehensive general and cosmetic
      dentistry under one roof, so you rarely need to be referred elsewhere.
    </p>
    <p>
      Every treatment begins with a thorough examination and a written plan that sets out your options, the expected
      number of visits and the cost before any work starts. We submit insurance claims for you and will tell you in
      advance what your plan is likely to cover. If you do not have dental insurance, our membership plan includes
      two cleanings and exams a year along with a discount on all other treatment.
    </p>

    <div class="cards">
      @for (s of services; track s.slug) {
        <article class="card">
          <img [src]="s.image.src" [alt]="s.image.alt" [width]="s.image.width" [height]="s.image.height" />
          <h2><a [routerLink]="['/services', s.slug]">{{ s.name }}</a></h2>
          <p>{{ s.summary }}</p>
          <p class="meta">{{ s.price }}</p>
        </article>
      }
    </div>

    <section>
      <h2>Not sure what you need?</h2>
      <p>
        If something feels wrong but you are not sure what, book a standard examination. We will take a look, explain
        what we find in plain language, and help you decide on next steps with no pressure. Toothache, a chipped tooth
        or swelling? Call us and we will see you the same day whenever possible.
      </p>
      <p><a routerLink="/contact">Get in touch with our reception team</a></p>
    </section>
  `,
})
export class ServicesPage {
  protected readonly services = services;

  constructor() {
    inject(SeoService).update({
      title: pageTitle('Dental Services'),
      description:
        'Explore CityCare’s dental services: professional cleanings and exams, dental implants and teeth whitening, with transparent pricing.',
      path: '/services',
    });
  }
}
