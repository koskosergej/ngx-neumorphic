import { Component } from '@angular/core';
import { NeoInput } from '../input/input';
import { NeoButton } from '../button/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NeoInput, NeoButton],
  template: '<h1>Neumorphic UI-kit</h1>'
})
export class AppComponent {
}
