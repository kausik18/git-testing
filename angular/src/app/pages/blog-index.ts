import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { posts } from '../data';
import { SeoService, pageTitle } from '../seo.service';

@Component({
  selector: 'app-blog-index',
  imports: [RouterLink, DatePipe],
  template: `
    <h1>Dental Health Blog</h1>
    <p class="lead">
      Practical advice from the CityCare dentists and hygienists on keeping your teeth and gums healthy at every age.
    </p>
    <p>
      We write about the questions patients ask us most often in the chair: how to brush and floss effectively, what
      to expect from common treatments, how to help children feel comfortable at the dentist and how diet affects your
      oral health. Our articles are written and reviewed by practising clinicians and are meant to complement, not
      replace, a personal examination. If anything you read raises a question about your own teeth, give us a call and
      we will be glad to help.
    </p>

    <div class="cards">
      @for (p of posts; track p.slug) {
        <article class="card">
          <img [src]="p.image.src" [alt]="p.image.alt" [width]="p.image.width" [height]="p.image.height" />
          <h2><a [routerLink]="['/blog', p.slug]">{{ p.title }}</a></h2>
          <p class="meta">
            By {{ p.author }} · <time [attr.datetime]="p.datePublished">{{ p.datePublished | date: 'longDate' }}</time>
          </p>
          <p>{{ p.excerpt }}</p>
        </article>
      }
    </div>
  `,
})
export class BlogIndexPage {
  protected readonly posts = posts;

  constructor() {
    inject(SeoService).update({
      title: pageTitle('Dental Health Blog'),
      description:
        'Tips and guides from the CityCare dental team on flossing, children’s dental visits, treatments and keeping your smile healthy.',
      path: '/blog',
    });
  }
}
