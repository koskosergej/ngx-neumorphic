import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { UnitInputComponent } from '@ngx-ks/unit-input';
import { FormFieldComponent } from '@ngx-ks/form-field';

@Component({
  selector: 'storybook-unit-input',
  imports: [
    CommonModule,
    UnitInputComponent,
    WrapperComponent,
    FormFieldComponent
  ],
  template: `
    <ks-storybook-wrapper>
      <ks-form-field>
        <ks-unit-input></ks-unit-input>
      </ks-form-field>
    </ks-storybook-wrapper>
  `,
  standalone: true
})
export default class InputComponent {
  @Input() disabled?: boolean;
}
