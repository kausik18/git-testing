import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SeoService, pageTitle } from '../seo.service';

/**
 * Wildcard route. A CSR SPA cannot change the HTTP status (the server returns
 * index.html with 200), so this page is marked noindex instead.
 */
@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <h1>Page Not Found</h1>
    <p class="lead">Sorry, we couldn’t find the page you were looking for.</p>
    <p>The link may be out of date, or the address may have been mistyped. Try one of these pages instead:</p>
    <ul>
      <li><a routerLink="/">CityCare home page</a></li>
      <li><a routerLink="/services">Our dental services</a></li>
      <li><a routerLink="/contact">Contact the clinic</a></li>
    </ul>
  `,
})
export class NotFoundPage {
  constructor() {
    inject(SeoService).update({
      title: pageTitle('Page Not Found'),
      description: 'The page you requested could not be found at CityCare Dental Clinic. Browse our services or get in touch.',
      path: inject(Router).url.split(/[?#]/)[0],
      robots: 'noindex',
    });
  }
}
