import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ks-divider',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="ks-divider"></div>`,
  styleUrls: ['./divider.component.scss']
})
export class KsDividerComponent {}
