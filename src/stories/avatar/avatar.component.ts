import { Component, input } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { AvatarComponent } from '@ngx-ks/avatar';

@Component({
  selector: 'storybook-button',
  imports: [AvatarComponent, WrapperComponent],
  template: `
    <ks-storybook-wrapper>
      <ks-avatar
        [size]="size()"
        [imageUrl]="imageUrl()"
      ></ks-avatar>
    </ks-storybook-wrapper>
  `,
  standalone: true
})
export default class AvatarStoryComponent {
  size = input(100);
  imageUrl = input('assets/placeholder.png');
}
