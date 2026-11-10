import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Crumb {
  name: string;
  path: string;
}

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  template: `
    <nav aria-label="Breadcrumb" class="breadcrumbs">
      <ol>
        @for (crumb of items(); track crumb.path; let last = $last) {
          <li>
            @if (last) {
              <span aria-current="page">{{ crumb.name }}</span>
            } @else {
              <a [routerLink]="crumb.path">{{ crumb.name }}</a>
            }
          </li>
        }
      </ol>
    </nav>
  `,
})
export class Breadcrumbs {
  readonly items = input.required<Crumb[]>();
}
