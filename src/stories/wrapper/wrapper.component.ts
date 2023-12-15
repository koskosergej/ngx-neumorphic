import { Component } from '@angular/core';

@Component({
  selector: 'neo-storybook-wrapper',
  standalone: true,
  imports: [],
  template: '<div class="storybook-wrapper"><ng-content></ng-content></div>',
  styleUrl: './wrapper.component.scss'
})
export class WrapperComponent {

}
