import {
  Component,
  forwardRef,
  Input
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule
} from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ks-checkbox',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass],
  template: `
    <label
      [ngClass]="{ disabled: isDisabled }"
      class="ks-checkbox"
    >
      <input
        class="ks-checkbox-input"
        (change)="toggleChange($event)"
        [(ngModel)]="isChecked"
        [disabled]="isDisabled"
        (blur)="onTouched($event)"
        type="checkbox"
      />
      <span class="checkmark"></span>
      <span class="label">{{ label }}</span>
    </label>
  `,
  styleUrl: './checkbox.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent
  implements ControlValueAccessor
{
  @Input() label?: string;
  isChecked: boolean = false;
  isDisabled: boolean = false;

  toggleChange(event: Event): void {
    this.isChecked =
      (event?.target as never)?.['checked'] || false;
    this.onChange(this.isChecked);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: boolean): void {
    this.isChecked = value;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  // Functions to propagate changes and touch events
  public onChange: any = () => {};

  public onTouched: any = () => {};
}
