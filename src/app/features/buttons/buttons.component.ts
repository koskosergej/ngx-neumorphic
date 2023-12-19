import { Component } from '@angular/core';
import { NeoButton } from '@ngx-neoumorphic/button';
import { NeoDividerComponent } from '@ngx-neoumorphic/divider';

@Component({
  selector: 'neo-buttons',
  standalone: true,
  imports: [NeoButton, NeoDividerComponent],
  template: `
    <button neo-button>Button</button>
    <neo-divider></neo-divider>
    <button neo-button disabled>Disabled</button>
  `
})
export class ButtonsComponent {}
