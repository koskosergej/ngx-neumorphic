import { Component } from '@angular/core';
import { NeoInput } from '@ngx-neoumorphic/input';
import { NeumorphicRadioButtonComponent } from '../../../radio-button/radio-button/radio-button.component';
import { NeumorphicRadioGroupComponent } from '../../../radio-button/radio-group/radio-group.component';

@Component({
  selector: 'neo-inputs',
  standalone: true,
  imports: [NeoInput, NeumorphicRadioButtonComponent, NeumorphicRadioGroupComponent],
  template: `
      <input neo-input placeholder="input component">
      <br />
      <br />
      <input neo-input placeholder="disabled input" disabled>
      <br>
      <br>
      <br>
      <neo-neumorphic-radio-group>
          <neo-neumorphic-radio-button value="option1">Option 1</neo-neumorphic-radio-button>
          <neo-neumorphic-radio-button value="option2">Option 2</neo-neumorphic-radio-button>
          <neo-neumorphic-radio-button value="option3">Option 3</neo-neumorphic-radio-button>
      </neo-neumorphic-radio-group>
  `
})
export class InputsComponent {

}
