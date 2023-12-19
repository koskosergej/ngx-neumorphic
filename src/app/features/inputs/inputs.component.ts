import { Component } from '@angular/core';
import { KsInput } from '@ngx-ks/input';
import { KsTextArea } from '@ngx-ks/textarea';
import { KsRadioButtonComponent, KsRadioGroupComponent } from '@ngx-ks/radio-button';
import { KsSelectorComponent } from '@ngx-ks/selector';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { KsSlideToggleComponent } from '@ngx-ks/slide-toggle';
import { KsDividerComponent } from '@ngx-ks/divider';

@Component({
  selector: 'ks-inputs',
  standalone: true,
  imports: [
    KsInput,
    KsTextArea,
    KsSelectorComponent,
    KsSelectorComponent,
    ReactiveFormsModule,
    KsSlideToggleComponent,
    KsDividerComponent,
    KsRadioGroupComponent,
    KsRadioButtonComponent
  ],
  template: `
    <input ks-input placeholder="input component" />
    <br />
    <br />
    <input ks-input placeholder="disabled input" disabled />
    <ks-divider></ks-divider>
    <ks-radio-group>
      <ks-radio-button value="option1">Option 1</ks-radio-button>
      <ks-radio-button value="option2">Option 2</ks-radio-button>
      <ks-radio-button value="option3">Option 3</ks-radio-button>
    </ks-radio-group>
    <ks-divider></ks-divider>
    <textarea ks-textarea placeholder="simple text area"></textarea>
    <br />
    <br />
    <textarea ks-textarea placeholder="disabled text area" disabled></textarea>
    <ks-divider></ks-divider>
    <ks-selector
      [formControl]="selectorCntrl"
      [options]="[
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' }
      ]"
    >
    </ks-selector>
    <br />
    <br />
    <ks-selector
      [formControl]="disabledSelector"
      [options]="[
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' }
      ]"
    >
    </ks-selector>
    <ks-divider></ks-divider>
    <ks-slide-toggle [formControl]="slideToggle"></ks-slide-toggle>
  `
})
export class InputsComponent {
  selectorCntrl = new FormControl({ value: 'option1', disabled: false });
  disabledSelector = new FormControl({ value: 'option1', disabled: true });
  slideToggle = new FormControl(true);
}
