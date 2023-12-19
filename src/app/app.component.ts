import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NeoInput } from '@ngx-neoumorphic/input';
import { NeoButton } from '@ngx-neoumorphic/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NeoInput, NeoButton, RouterOutlet, RouterLink],
  template: `
    <div class="app-container">
      <h1>Neumorphic UI-kit</h1>
      <div class="navigation">
        <a [routerLink]="'/inputs'">Form Controls</a>
        <a [routerLink]="'/buttons'">Buttons</a>
        <a [routerLink]="'/alerts'">Alerts</a>
        <a [routerLink]="'/cards'">Cards</a>
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
