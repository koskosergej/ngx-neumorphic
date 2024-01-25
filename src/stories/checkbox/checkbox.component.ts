import type { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import {
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';
import { CheckboxComponent } from '@ngx-ks/checkbox';

@Component({
  selector: 'storybook-checkbox',
  imports: [
    CheckboxComponent,
    WrapperComponent,
    ReactiveFormsModule
  ],
  template: `
    <ks-storybook-wrapper>
      <ks-checkbox
        [label]="label"
        [formControl]="$any(cntrl)"
      >
      </ks-checkbox>
    </ks-storybook-wrapper>
  `,
  standalone: true
})
export default class CheckboxStoryBookComponent
  implements OnInit
{
  public cntrl?: FormControl;

  /**
   * Button contents
   */
  @Input() label!: string;
  @Input() value!: boolean;
  @Input() disabled = false;

  constructor() {}

  ngOnInit() {
    this.cntrl = new FormControl({
      value: this.value,
      disabled: this.disabled
    });
  }
}
