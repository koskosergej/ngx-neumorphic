import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { KsInput } from '@ngx-ks/input';
import { KsButton } from '@ngx-ks/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [KsInput, KsButton, RouterOutlet, RouterLink],
  template: `
    <div class="app-container">
      <h1>ks UI-kit</h1>
      <div class="navigation">
        <a [routerLink]="'/inputs'">Form Controls</a>
        <a [routerLink]="'/buttons'">Buttons</a>
        <a [routerLink]="'/alerts'">Alerts</a>
        <a [routerLink]="'/layout'">Layout</a>
        <a [routerLink]="'/indicators'">Indicators</a>
        <a [routerLink]="'/pipes'">Pipes</a>
        <a [routerLink]="'/common-pages'">Common Pages</a>
      </div>
      <hr />
      <div class="app-content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [
    `
      .app-content {
        max-width: 500px;
        padding: 20px;
      }

      .navigation {
        padding-left: 30px;
        display: flex;
        gap: 20px;
      }
    `
  ]
})
export class AppComponent {}
