import { Component } from '@angular/core';
import { NeoButton } from '@ngx-neoumorphic/button';

@Component({
  selector: 'neo-buttons',
  standalone: true,
  imports: [NeoButton],
  template: `
    <button neo-button>Button</button>
    <br />
    <br />
    <button neo-button disabled>Disabled</button>
  `
})
export class ButtonsComponent {}
