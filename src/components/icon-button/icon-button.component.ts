import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'ks-icon-button',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {
  @Input() icon = 'home';
  @Input() size = 50;
  @Input() color = '#000';
  @Input() disabled = false;
}
