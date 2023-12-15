import { Component, Input } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { NeoButton } from '../../button/button';

@Component({
  selector: 'storybook-button',
  imports: [NeoButton, WrapperComponent],
  template: `
      <neo-storybook-wrapper>
          <button neo-button
                  (click)="onClick($event)"
                  [disabled]="disabled"
          >
              {{ label }}
          </button>
      </neo-storybook-wrapper>
  `,
  standalone: true
})
export default class ButtonComponent {
  /**
   * Button contents
   */
  @Input() label!: string;
  @Input() disabled?: boolean;

  /**
   * Optional click handler
   */
  onClick(event: MouseEvent): void {
    console.log('clicked', event);
  }
}
