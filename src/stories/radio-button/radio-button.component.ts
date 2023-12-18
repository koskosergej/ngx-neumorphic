import { Component } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { NeumorphicRadioButtonComponent, NeumorphicRadioGroupComponent } from '@ngx-neoumorphic/radio-button';

@Component({
  selector: 'storybook-button',
  imports: [WrapperComponent, NeumorphicRadioButtonComponent, NeumorphicRadioGroupComponent],
  template: `
    <neo-storybook-wrapper>
      <neo-neumorphic-radio-group>
        <neo-neumorphic-radio-button value="option1">Option 1</neo-neumorphic-radio-button>
        <neo-neumorphic-radio-button value="option2">Option 2</neo-neumorphic-radio-button>
        <neo-neumorphic-radio-button value="option3">Option 3</neo-neumorphic-radio-button>
      </neo-neumorphic-radio-group>
    </neo-storybook-wrapper>
  `,
  standalone: true
})
export default class RadioButtonComponent {}
