import { Component } from '@angular/core';
import { NeoInput } from '@ngx-neoumorphic/input';

@Component({
  selector: 'neo-inputs',
  standalone: true,
  imports: [NeoInput],
  template: `
      <input neo-input placeholder="input component">
      <br />
      <br />
      <input neo-input placeholder="disabled input" disabled>
  `
})
export class InputsComponent {

}
