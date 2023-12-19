import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'neo-divider',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="neumorphic-divider"></div>`,
  styleUrls: ['./divider.component.scss']
})
export class NeoDividerComponent {}
