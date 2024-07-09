import { Component } from '@angular/core';
import { KsButton } from '@ngx-ks/button';
import { KsDividerComponent } from '@ngx-ks/divider';
import { IconButtonComponent } from '@ngx-ks/icon-button';

@Component({
  selector: 'ks-buttons',
  standalone: true,
  imports: [
    KsButton,
    KsDividerComponent,
    IconButtonComponent
  ],
  template: `
    <button ks-button>Button</button>
    <ks-divider></ks-divider>
    <button ks-button disabled>Disabled</button>
    <ks-divider></ks-divider>
    <ks-icon-button></ks-icon-button>
    <br />
    <ks-icon-button [disabled]="true"></ks-icon-button>
    <br />
    <ks-icon-button icon="arrow_forward"></ks-icon-button>
    <br />
    <ks-icon-button
      icon="favorite"
      [size]="30"
      [color]="'red'"
    ></ks-icon-button>
  `
})
export class ButtonsComponent {}
