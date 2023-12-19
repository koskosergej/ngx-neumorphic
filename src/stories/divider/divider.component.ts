import { Component } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { NeoButton } from '@ngx-neoumorphic/button';
import { NeoDividerComponent } from '@ngx-neoumorphic/divider';

@Component({
  selector: 'storybook-button',
  imports: [NeoButton, WrapperComponent, NeoDividerComponent],
  template: `
    <neo-storybook-wrapper>
      <neo-divider></neo-divider>
    </neo-storybook-wrapper>
  `,
  standalone: true
})
export default class DividerComponent {}
