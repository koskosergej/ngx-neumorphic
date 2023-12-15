import { Component } from '@angular/core';
import { modules } from '../modules';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...modules],
  template: '<h1>Neumorphic UI-kit</h1>'
})
export class AppComponent {
}
