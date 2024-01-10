import { Component, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'ks-slide-toggle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './slide-toggle.component.html',
  styleUrl: './slide-toggle.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KsSlideToggleComponent),
      multi: true
    }
  ]
})
export class KsSlideToggleComponent
  implements ControlValueAccessor
{
  isChecked: boolean = false;

  constructor() {}

  writeValue(value: boolean): void {
    this.isChecked = value;
  }

  registerOnChange(fn: never): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement if needed
  }

  toggleChange(event: any): void {
    const isChecked = event?.target?.checked;
    this.isChecked = isChecked;
    this.onChange(isChecked);
    this.onTouched();
  }

  private onChange: any = () => {};

  private onTouched: any = () => {};
}
