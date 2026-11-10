import { Component, inject } from '@angular/core';
import { clinic } from '../data';
import { SeoService, pageTitle } from '../seo.service';

@Component({
  selector: 'app-privacy',
  template: `
    <h1>Privacy Policy</h1>
    <p class="meta">Last updated: 1 October 2026</p>
    <p>
      CityCare Dental Clinic respects your privacy. This policy explains what personal information we collect through
      this website and at the clinic, how we use it and the choices you have. As a healthcare provider we also comply
      with the Health Insurance Portability and Accountability Act (HIPAA); our separate Notice of Privacy Practices,
      available at reception, describes how protected health information is handled.
    </p>

    <section>
      <h2>Information we collect</h2>
      <p>
        When you use our contact form we collect your name, email address, optional phone number and the content of
        your message. Our website also records standard technical information such as your browser type and the pages
        you visit, using privacy-friendly analytics that do not use advertising cookies or track you across other
        websites.
      </p>
    </section>

    <section>
      <h2>How we use your information</h2>
      <p>
        We use the details you send us only to respond to your enquiry, arrange appointments and send reminders you
        have agreed to receive. We never sell or rent personal information, and we share it only with service providers
        that help us run the clinic, such as our practice-management and appointment-reminder systems, under strict
        confidentiality agreements.
      </p>
    </section>

    <section>
      <h2>Data retention and security</h2>
      <p>
        Website enquiries are deleted after twelve months unless they become part of your patient record. Clinical
        records are kept for the period required by Oregon law. All data is encrypted in transit and at rest.
      </p>
    </section>

    <section>
      <h2>Your rights</h2>
      <p>
        You may ask to see, correct or delete the personal information we hold about you, subject to legal record-keeping
        requirements. To make a request, email <a href="mailto:{{ clinic.email }}">{{ clinic.email }}</a> or write to
        us at {{ clinic.street }}, {{ clinic.city }}, {{ clinic.region }} {{ clinic.postalCode }}.
      </p>
    </section>
  `,
})
export class PrivacyPage {
  protected readonly clinic = clinic;

  constructor() {
    inject(SeoService).update({
      title: pageTitle('Privacy Policy'),
      description:
        'How CityCare Dental Clinic collects, uses and protects personal information submitted through this website and at the clinic.',
      path: '/privacy',
    });
  }
}
