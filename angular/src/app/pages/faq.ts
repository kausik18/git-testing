import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { faqs } from '../data';
import { SeoService, pageTitle } from '../seo.service';

@Component({
  selector: 'app-faq',
  imports: [RouterLink],
  template: `
    <h1>Frequently Asked Questions</h1>
    <p class="lead">
      Answers to the questions our reception team hears most often. If yours is not covered here, please
      <a routerLink="/contact">get in touch</a>.
    </p>
    @for (f of faqs; track f.question) {
      <section class="faq-item">
        <h2>{{ f.question }}</h2>
        <p>{{ f.answer }}</p>
      </section>
    }
  `,
})
export class FaqPage {
  protected readonly faqs = faqs;

  constructor() {
    inject(SeoService).update({
      title: pageTitle('Frequently Asked Questions'),
      description:
        'Answers about new patients, insurance, emergencies, sedation, costs and parking at CityCare Dental Clinic in Riverton, Oregon.',
      path: '/faq',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        },
      ],
    });
  }
}
