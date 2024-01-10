import { Component, Input } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { KsButton } from '@ngx-ks/button';

@Component({
  selector: 'storybook-button',
  imports: [KsButton, WrapperComponent],
  template: `
    <ks-storybook-wrapper>
      <button
        ks-button
        (click)="onClick($event)"
        [disabled]="disabled"
      >
        {{ label }}
      </button>
    </ks-storybook-wrapper>
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
