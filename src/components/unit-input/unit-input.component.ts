import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'ks-unit-input',
  standalone: true,
  imports: [],
  templateUrl: './unit-input.component.html',
  styleUrl: './unit-input.component.scss'
})
export class UnitInputComponent {
  @Input() value: number = 0;
  @Output() valueChange = new EventEmitter<number>();

  increment(): void {
    this.value++;
    this.valueChange.emit(this.value);
  }

  decrement(): void {
    if (this.value > 0) {
      this.value--;
      this.valueChange.emit(this.value);
    }
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = +input.value;
    this.valueChange.emit(this.value);
  }
}
