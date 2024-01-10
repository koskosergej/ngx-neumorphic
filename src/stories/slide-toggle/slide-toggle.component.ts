import { Component } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { KsSlideToggleComponent } from '@ngx-ks/slide-toggle';
import {
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'storybook-button',
  imports: [
    WrapperComponent,
    KsSlideToggleComponent,
    ReactiveFormsModule
  ],
  template: `
    <ks-storybook-wrapper>
      <ks-slide-toggle
        [formControl]="slideToggle"
      ></ks-slide-toggle>
    </ks-storybook-wrapper>
  `,
  standalone: true
})
export default class SlideToggleComponent {
  slideToggle = new FormControl(true);
}
