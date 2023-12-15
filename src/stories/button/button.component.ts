import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NeoButtonModule } from '../../button/neo-button.module';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
  selector: 'storybook-button',
  imports: [CommonModule, NeoButtonModule, WrapperComponent],
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
