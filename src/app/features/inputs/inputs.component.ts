import { Component } from '@angular/core';
import { NeoInput } from '@ngx-neoumorphic/input';
import { NeoTextArea } from '@ngx-neoumorphic/textarea';
import { NeumorphicRadioButtonComponent, NeumorphicRadioGroupComponent } from '@ngx-neoumorphic/radio-button';

@Component({
  selector: 'neo-inputs',
  standalone: true,
  imports: [NeoInput, NeumorphicRadioButtonComponent, NeumorphicRadioGroupComponent, NeoTextArea],
  template: `
      <input neo-input placeholder="input component">
      <br />
      <br />
      <input neo-input placeholder="disabled input" disabled>
      <br />
      <br />
      <br />
      <neo-neumorphic-radio-group>
          <neo-neumorphic-radio-button value="option1">Option 1</neo-neumorphic-radio-button>
          <neo-neumorphic-radio-button value="option2">Option 2</neo-neumorphic-radio-button>
          <neo-neumorphic-radio-button value="option3">Option 3</neo-neumorphic-radio-button>
      </neo-neumorphic-radio-group>
      <br />
      <br />
      <br />
      <textarea neo-textarea placeholder="simple text area"></textarea>
      <br />
      <br />
      <textarea neo-textarea placeholder="disabled text area" disabled></textarea>
  `
})
export class InputsComponent {

}
