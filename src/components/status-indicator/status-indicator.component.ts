import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ks-status-indicator',
  standalone: true,
  imports: [NgClass],
  templateUrl: './status-indicator.component.html',
  styleUrl: './status-indicator.component.scss'
})
export class StatusIndicatorComponent {
  @Input() status:
    | 'success'
    | 'warning'
    | 'error'
    | 'info'
    | 'loading' = 'info';

  get statusIcon(): string {
    switch (this.status) {
      case 'success':
        return '✔️';
      case 'warning':
        return '⚠️';
      case 'error':
        return '❌';
      case 'loading':
        return '⏳';
      default:
        return 'ℹ️';
    }
  }
}
