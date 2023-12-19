import { Component } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { KsButton } from '@ngx-ks/button';
import { KsDividerComponent } from '@ngx-ks/divider';

@Component({
  selector: 'storybook-button',
  imports: [KsButton, WrapperComponent, KsDividerComponent],
  template: `
    <ks-storybook-wrapper>
      <ks-divider></ks-divider>
    </ks-storybook-wrapper>
  `,
  standalone: true
})
export default class DividerComponent {}
