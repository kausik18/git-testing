import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { clinic } from './data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
      <div class="container header-inner">
        <a routerLink="/" class="brand">
          <img src="/favicon.svg" alt="CityCare tooth logo" width="32" height="32" />
          <span>CityCare Dental</span>
        </a>
        <nav aria-label="Main navigation">
          <ul>
            @for (link of nav; track link.path) {
              <li>
                <a
                  [routerLink]="link.path"
                  routerLinkActive="active"
                  [routerLinkActiveOptions]="{ exact: link.path === '/' }"
                  >{{ link.label }}</a
                >
              </li>
            }
          </ul>
        </nav>
      </div>
    </header>

    <main id="main" class="container">
      <router-outlet />
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <p class="footer-title">{{ clinic.name }}</p>
          <p>{{ clinic.street }}<br />{{ clinic.city }}, {{ clinic.region }} {{ clinic.postalCode }}</p>
          <p><a href="tel:{{ clinic.phone }}">{{ clinic.phoneDisplay }}</a></p>
        </div>
        <nav aria-label="Footer navigation">
          <ul>
            @for (link of footerNav; track link.path) {
              <li><a [routerLink]="link.path">{{ link.label }}</a></li>
            }
            <li>
              <!-- INTENTIONAL SEO DEFECT: /careers is only reachable through this
                   JS click handler; there is no <a href> pointing to it anywhere. -->
              <span class="js-link" role="button" tabindex="0" (click)="openCareers()" (keydown.enter)="openCareers()"
                >Careers</span
              >
            </li>
          </ul>
        </nav>
      </div>
      <p class="container copyright">© 2026 {{ clinic.name }}. All rights reserved.</p>
    </footer>
  `,
})
export class App {
  private readonly router = inject(Router);
  protected readonly clinic = clinic;

  protected readonly nav = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  protected readonly footerNav = [...this.nav, { path: '/privacy', label: 'Privacy Policy' }];

  protected openCareers(): void {
    this.router.navigateByUrl('/careers');
  }
}
