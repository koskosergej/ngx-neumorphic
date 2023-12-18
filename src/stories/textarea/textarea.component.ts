import { Component, Input } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { NeoTextArea } from '@ngx-neoumorphic/textarea';

@Component({
  selector: 'storybook-button',
  imports: [WrapperComponent, NeoTextArea],
  template: `
    <neo-storybook-wrapper>
      <textarea neo-textarea placeholder="simple text area" [disabled]="disabled"></textarea>
    </neo-storybook-wrapper>
  `,
  standalone: true
})
export default class TextareaComponent {
  @Input() disabled = false;
}
