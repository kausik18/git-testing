import { Component, inject } from '@angular/core';
import { clinic, images } from '../data';
import { SeoService, pageTitle } from '../seo.service';

@Component({
  selector: 'app-contact',
  template: `
    <h1>Contact CityCare Dental Clinic</h1>
    <p class="lead">
      Whether you would like to book a check-up, ask about a treatment or need help with a dental emergency, our
      reception team is happy to help.
    </p>

    <div class="two-col">
      <section>
        <h2>Visit or call us</h2>
        <address>
          {{ clinic.name }}<br />
          {{ clinic.street }}<br />
          {{ clinic.city }}, {{ clinic.region }} {{ clinic.postalCode }}<br />
          Phone: <a href="tel:{{ clinic.phone }}">{{ clinic.phoneDisplay }}</a><br />
          Email: <a href="mailto:{{ clinic.email }}">{{ clinic.email }}</a>
        </address>
        <h3>Opening hours</h3>
        <ul>
          @for (h of clinic.hours; track h.days) {
            <li>{{ h.days }}: {{ h.time }}</li>
          }
        </ul>
        <p>
          We are on the ground floor of the Harbor Plaza building with step-free access from the street. Free patient
          parking is available in the garage behind the building; bring your ticket to reception for validation. If
          you are running late, please call so we can rearrange your appointment if needed.
        </p>
        <img
          [src]="images.contact.src"
          [alt]="images.contact.alt"
          [width]="images.contact.width"
          [height]="images.contact.height"
        />
      </section>

      <section>
        <h2>Send us a message</h2>
        <p>
          Fill in the form and we will reply within one working day. Please do not include detailed medical
          information; we will discuss it with you securely by phone.
        </p>
        <!-- Non-functional demo form -->
        <form class="contact-form" (submit)="$event.preventDefault()">
          <label for="name">Full name</label>
          <input id="name" name="name" type="text" autocomplete="name" required />
          <label for="email">Email address</label>
          <input id="email" name="email" type="email" autocomplete="email" required />
          <label for="phone">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" autocomplete="tel" />
          <label for="reason">Reason for contacting us</label>
          <select id="reason" name="reason">
            <option>Book a check-up</option>
            <option>Ask about a treatment</option>
            <option>Insurance question</option>
            <option>Something else</option>
          </select>
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5"></textarea>
          <button type="submit">Send message</button>
        </form>
      </section>
    </div>
  `,
})
export class ContactPage {
  protected readonly clinic = clinic;
  protected readonly images = images;

  constructor() {
    inject(SeoService).update({
      title: pageTitle('Contact Us'),
      description:
        'Book an appointment or ask a question. Find CityCare Dental Clinic’s address, phone number, opening hours and parking information.',
      path: '/contact',
    });
  }
}
