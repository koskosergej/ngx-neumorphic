import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { KsInput } from '@ngx-ks/input';

@Component({
  selector: 'storybook-input',
  imports: [CommonModule, KsInput, WrapperComponent],
  template: `
    <ks-storybook-wrapper>
      <input ks-input style="width: 200px" placeholder="placeholder" [disabled]="disabled" />
    </ks-storybook-wrapper>
  `,
  standalone: true
})
export default class InputComponent {
  @Input() disabled?: boolean;
}
