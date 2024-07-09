import { Component, Input } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { IconButtonComponent } from '@ngx-ks/icon-button';

@Component({
  selector: 'storybook-icon-button',
  imports: [IconButtonComponent, WrapperComponent],
  template: `
    <ks-storybook-wrapper>
      <ks-icon-button
        [disabled]="disabled"
        [icon]="icon"
        [size]="size"
        [color]="color"
      ></ks-icon-button>
    </ks-storybook-wrapper>
  `,
  standalone: true
})
export default class IconButtonComponentStory {
  @Input() disabled = false;
  @Input() icon = 'home';
  @Input() size = 50;
  @Input() color = '#000';

  onClick(event: MouseEvent): void {
    console.log('clicked', event);
  }
}
