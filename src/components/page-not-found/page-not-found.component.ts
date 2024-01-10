import { Component } from '@angular/core';
import { KsButton } from '@ngx-ks/button';
import { Router } from '@angular/router';

@Component({
  selector: 'ks-page-not-found',
  standalone: true,
  imports: [KsButton],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {
  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
