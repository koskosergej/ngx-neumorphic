import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { NeoInput } from '@ngx-neoumorphic/input';

@Component({
  selector: 'storybook-input',
  imports: [CommonModule, NeoInput, WrapperComponent],
  template: `
    <neo-storybook-wrapper>
      <input neo-input style="width: 200px" placeholder="placeholder" [disabled]="disabled" />
    </neo-storybook-wrapper>
  `,
  standalone: true
})
export default class InputComponent {
  @Input() disabled?: boolean;
}
