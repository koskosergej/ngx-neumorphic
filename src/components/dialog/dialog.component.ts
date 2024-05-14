import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'ks-dialog',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter();

  constructor() {}

  closeDialog(): void {
    this.isOpen = false;
    this.close.emit();
  }
}
