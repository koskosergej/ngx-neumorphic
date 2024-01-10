import { Component, Input } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { KsTextArea } from '@ngx-ks/textarea';

@Component({
  selector: 'storybook-button',
  imports: [WrapperComponent, KsTextArea],
  template: `
    <ks-storybook-wrapper>
      <textarea
        ks-textarea
        placeholder="simple text area"
        [disabled]="disabled"
      ></textarea>
    </ks-storybook-wrapper>
  `,
  standalone: true
})
export default class TextareaComponent {
  @Input() disabled = false;
}
