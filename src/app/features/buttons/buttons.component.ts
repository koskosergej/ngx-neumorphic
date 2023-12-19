import { Component } from '@angular/core';
import { KsButton } from '@ngx-ks/button';
import { KsDividerComponent } from '@ngx-ks/divider';

@Component({
  selector: 'ks-buttons',
  standalone: true,
  imports: [KsButton, KsDividerComponent],
  template: `
    <button ks-button>Button</button>
    <ks-divider></ks-divider>
    <button ks-button disabled>Disabled</button>
  `
})
export class ButtonsComponent {}
