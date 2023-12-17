import { ChangeDetectionStrategy, Component, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'neo-neumorphic-radio-button',
  template: `
      <label class="neumorphic-radio-label">
          <input type="radio" [value]="value" [checked]="checked" (change)="choseValue()" [name]="name">
          <span><ng-content></ng-content></span>
      </label>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NeumorphicRadioButtonComponent),
      multi: true
    }
  ],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NeumorphicRadioButtonComponent implements ControlValueAccessor {
  @Input() value: any;
  @Input() name: any;
  checked: boolean = false;

  constructor() {
  }

  writeValue(value: any): void {
    this.checked = this.value === value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // Implement if needed
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement if needed
  }

  choseValue(): void {
    this.checked = true;
    this.onChange(true);
  }

  private onChange: any = () => {
  };
}
