import { Component } from '@angular/core';
import { KsInput } from '@ngx-ks/input';
import { KsTextArea } from '@ngx-ks/textarea';
import {
  KsRadioButtonComponent,
  KsRadioGroupComponent
} from '@ngx-ks/radio-button';
import { KsSelectorComponent } from '@ngx-ks/selector';
import {
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { KsSlideToggleComponent } from '@ngx-ks/slide-toggle';
import { KsDividerComponent } from '@ngx-ks/divider';
import { FormFieldComponent } from '@ngx-ks/form-field';
import { KsLabel } from '@ngx-ks/label';
import { ErrorDirective } from '@ngx-ks/error';
import { NgIf } from '@angular/common';
import { CheckboxComponent } from '@ngx-ks/checkbox';
import { DropdownComponent } from '@ngx-ks/dropdown';
import { UnitInputComponent } from '@ngx-ks/unit-input';
import { DateRangePickerComponent } from '@ngx-ks/date-range-picker';

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
    KsRadioButtonComponent,
    FormFieldComponent,
    KsLabel,
    ErrorDirective,
    NgIf,
    CheckboxComponent,
    DropdownComponent,
    UnitInputComponent,
    DateRangePickerComponent
  ],
  template: `
    <ks-form-field>
      <ks-label>Label Text</ks-label>
      <input ks-input placeholder="input component" />
    </ks-form-field>
    <ks-form-field>
      <input
        ks-input
        placeholder="disabled input"
        [disabled]="true"
      />
    </ks-form-field>
    <ks-form-field>
      <ks-label>RequiredInput</ks-label>
      <input
        ks-input
        placeholder="required input"
        [formControl]="inputCntrl"
      />
      <ks-error
        *ngIf="
          inputCntrl.hasError('required') &&
          inputCntrl.touched
        "
        >Required
      </ks-error>
    </ks-form-field>
    <ks-divider></ks-divider>
    <ks-form-field>
      <ks-unit-input></ks-unit-input>
    </ks-form-field>
    <ks-divider></ks-divider>
    <ks-radio-group>
      <ks-radio-button value="option1"
        >Option 1
      </ks-radio-button>
      <ks-radio-button value="option2"
        >Option 2
      </ks-radio-button>
      <ks-radio-button value="option3"
        >Option 3
      </ks-radio-button>
    </ks-radio-group>
    <ks-divider></ks-divider>
    <ks-form-field>
      <textarea
        ks-textarea
        placeholder="simple text area"
      ></textarea>
    </ks-form-field>
    <ks-form-field>
      <ks-label>Disabled</ks-label>
      <textarea
        ks-textarea
        placeholder="disabled text area"
        [disabled]="true"
      ></textarea>
    </ks-form-field>
    <ks-form-field>
      <ks-label>RequiredTextarea</ks-label>
      <textarea
        ks-textarea
        placeholder="required textarea"
        [formControl]="textareaCntrl"
      ></textarea>
    </ks-form-field>
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
    <ks-slide-toggle
      [formControl]="slideToggle"
    ></ks-slide-toggle>
    <ks-divider></ks-divider>
    <ks-checkbox
      label="checkbox"
      [formControl]="checkboxCntrl"
    ></ks-checkbox>
    <ks-checkbox
      label="disabled"
      [formControl]="checkboxDisabledCntrl"
    ></ks-checkbox>
    <ks-divider></ks-divider>
    <ks-dropdown [options]="['42', '100']"></ks-dropdown>
    <ks-divider></ks-divider>
    <ks-date-range-picker></ks-date-range-picker>
  `
})
export class InputsComponent {
  inputCntrl = new FormControl(null, [Validators.required]);
  textareaCntrl = new FormControl(null, [
    Validators.required
  ]);
  selectorCntrl = new FormControl({
    value: 'option1',
    disabled: false
  });
  disabledSelector = new FormControl({
    value: 'option1',
    disabled: true
  });
  slideToggle = new FormControl(true);
  checkboxCntrl = new FormControl(false);
  checkboxDisabledCntrl = new FormControl({
    value: true,
    disabled: true
  });
}
