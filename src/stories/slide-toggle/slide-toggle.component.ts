import { Component } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { NeoSlideToggleComponent } from '@ngx-neoumorphic/slide-toggle';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'storybook-button',
  imports: [WrapperComponent, NeoSlideToggleComponent, ReactiveFormsModule],
  template: `
    <neo-storybook-wrapper>
      <neo-slide-toggle [formControl]="slideToggle"></neo-slide-toggle>
    </neo-storybook-wrapper>
  `,
  standalone: true
})
export default class SlideToggleComponent {
  slideToggle = new FormControl(true);
}
