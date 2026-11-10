import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { images, team } from '../data';
import { SeoService, pageTitle } from '../seo.service';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  template: `
    <h1>About CityCare Dental Clinic</h1>
    <img [src]="images.team.src" [alt]="images.team.alt" [width]="images.team.width" [height]="images.team.height" />

    <section>
      <h2>Our story</h2>
      <p>
        Dr. Amara Okafor opened CityCare in 2009 with two treatment rooms and a simple idea: dental care should be
        unhurried, transparent and kind. Fifteen years later we have six rooms, a team of fourteen, and many patients
        who first visited as children and now bring children of their own.
      </p>
      <p>
        We are an independent, dentist-owned practice. That means clinical decisions are made by the people who
        actually treat you, not by a corporate head office with sales targets. We will always explain your options,
        including the option of waiting and monitoring, and we put every treatment plan and estimate in writing.
      </p>
    </section>

    <section>
      <h2>Our approach to care</h2>
      <p>
        Prevention comes first. Most dental problems are far easier and cheaper to treat when they are caught early,
        so we focus on thorough hygiene visits, honest advice about diet and home care, and regular screening. When
        treatment is needed we use conservative techniques that preserve as much natural tooth as possible.
      </p>
      <p>
        We also take dental anxiety seriously. Around one in five adults feels nervous about the dentist, and we have
        built our clinic around making those visits easier, from a calm waiting room with no drill noise to signals
        you can use to pause at any time during treatment.
      </p>
    </section>

    <section>
      <h2>Meet the team</h2>
      <ul class="team">
        @for (person of team; track person.name) {
          <li><strong>{{ person.name }}</strong> — {{ person.role }}</li>
        }
      </ul>
      <p>
        Ready to meet us in person? <a routerLink="/contact">Contact the clinic</a> or read about our
        <a routerLink="/services">dental services</a>.
      </p>
    </section>
  `,
})
export class AboutPage {
  protected readonly images = images;
  protected readonly team = team;

  constructor() {
    inject(SeoService).update({
      title: pageTitle('About Our Dental Practice'),
      description:
        'Meet the dentists and hygienists at CityCare Dental Clinic, an independent Riverton practice focused on gentle, preventive family care.',
      path: '/about',
      // INTENTIONAL SEO DEFECT: canonical is a relative URL instead of an absolute one.
      canonicalHref: '/about',
    });
  }
}
