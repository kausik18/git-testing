import { Component, inject } from '@angular/core';
import { clinic, openings } from '../data';
import { SeoService, pageTitle } from '../seo.service';

/**
 * INTENTIONAL SEO DEFECT: this page is only reachable through a JavaScript
 * click handler in the footer (no <a href="/careers"> exists anywhere).
 */
@Component({
  selector: 'app-careers',
  template: `
    <h1>Careers at CityCare</h1>
    <p class="lead">
      We are a friendly, independent practice that invests in its people. If you care about patients and enjoy working
      as part of a close team, we would love to hear from you.
    </p>
    <p>
      Everyone at CityCare enjoys a four-day working week, paid continuing education, employer-funded health and dental
      cover, a retirement plan with matching contributions and free dental care for immediate family. We close the
      clinic for a week between Christmas and New Year, and we schedule realistic appointment lengths so nobody is
      constantly running behind.
    </p>

    <section>
      <h2>Current openings</h2>
      @for (job of openings; track job.title) {
        <article class="card">
          <h3>{{ job.title }}</h3>
          <p class="meta">{{ job.type }}</p>
          <p>{{ job.summary }}</p>
        </article>
      }
    </section>

    <section>
      <h2>How to apply</h2>
      <p>
        Send your CV and a short note about why you would like to join us to
        <a href="mailto:{{ clinic.email }}">{{ clinic.email }}</a>. We read every application and reply to everyone
        within two weeks. Shortlisted candidates are invited to an informal chat and a paid working interview.
      </p>
    </section>
  `,
})
export class CareersPage {
  protected readonly clinic = clinic;
  protected readonly openings = openings;

  constructor() {
    inject(SeoService).update({
      title: pageTitle('Careers'),
      description:
        'Join the CityCare Dental Clinic team in Riverton. See current openings for hygienists, dental assistants and front desk coordinators.',
      path: '/careers',
    });
  }
}
