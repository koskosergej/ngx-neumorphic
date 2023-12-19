import { Component } from '@angular/core';
import { NeoInput } from '@ngx-neoumorphic/input';
import { NeoTextArea } from '@ngx-neoumorphic/textarea';
import { NeumorphicRadioButtonComponent, NeumorphicRadioGroupComponent } from '@ngx-neoumorphic/radio-button';
import { NeoSelectorComponent } from '@ngx-neoumorphic/selector';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NeoSlideToggleComponent } from '@ngx-neoumorphic/slide-toggle';
import { NeoDividerComponent } from '@ngx-neoumorphic/divider';

@Component({
  selector: 'neo-inputs',
  standalone: true,
  imports: [
    NeoInput,
    NeumorphicRadioButtonComponent,
    NeumorphicRadioGroupComponent,
    NeoTextArea,
    NeoSelectorComponent,
    NeoSelectorComponent,
    ReactiveFormsModule,
    NeoSlideToggleComponent,
    NeoDividerComponent
  ],
  template: `
    <input neo-input placeholder="input component" />
    <br />
    <br />
    <input neo-input placeholder="disabled input" disabled />
    <neo-divider></neo-divider>
    <neo-neumorphic-radio-group>
      <neo-neumorphic-radio-button value="option1">Option 1</neo-neumorphic-radio-button>
      <neo-neumorphic-radio-button value="option2">Option 2</neo-neumorphic-radio-button>
      <neo-neumorphic-radio-button value="option3">Option 3</neo-neumorphic-radio-button>
    </neo-neumorphic-radio-group>
    <neo-divider></neo-divider>
    <textarea neo-textarea placeholder="simple text area"></textarea>
    <br />
    <br />
    <textarea neo-textarea placeholder="disabled text area" disabled></textarea>
    <neo-divider></neo-divider>
    <neo-selector
      [formControl]="selectorCntrl"
      [options]="[
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' }
      ]"
    >
    </neo-selector>
    <br />
    <br />
    <neo-selector
      [formControl]="disabledSelector"
      [options]="[
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' }
      ]"
    >
    </neo-selector>
    <neo-divider></neo-divider>
    <neo-slide-toggle [formControl]="slideToggle"></neo-slide-toggle>
  `
})
export class InputsComponent {
  selectorCntrl = new FormControl({ value: 'option1', disabled: false });
  disabledSelector = new FormControl({ value: 'option1', disabled: true });
  slideToggle = new FormControl(true);
}
