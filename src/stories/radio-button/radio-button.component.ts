import { Component } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import {
  KsRadioButtonComponent,
  KsRadioGroupComponent
} from '@ngx-ks/radio-button';

@Component({
  selector: 'storybook-button',
  imports: [
    WrapperComponent,
    KsRadioGroupComponent,
    KsRadioButtonComponent
  ],
  template: `
    <ks-storybook-wrapper>
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
    </ks-storybook-wrapper>
  `,
  standalone: true
})
export default class RadioButtonComponent {}
