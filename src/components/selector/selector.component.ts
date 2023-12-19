import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectorOption, SelectorOptions } from './type';
import { NgFor } from '@angular/common';

@Component({
  selector: 'ks-selector',
  standalone: true,
  imports: [FormsModule, NgFor],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KsSelectorComponent),
      multi: true
    }
  ],
  template: `
    <div class="ks-selector-wrapper">
      <select (change)="optionsSelected()" [(ngModel)]="selectedValue" [disabled]="disabled" class="ks-selector">
        <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
      </select>
    </div>
  `,
  styleUrls: [`./selector.component.scss`]
})
export class KsSelectorComponent implements ControlValueAccessor {
  selectedValue: SelectorOption['value'];

  @Input() options!: SelectorOptions;

  disabled = false;

  constructor() {}

  writeValue(value: any): void {
    this.selectedValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled ?? false;
  }

  optionsSelected(): void {
    this.onChange(this.selectedValue);
  }

  private onChange: any = () => {};

  private onTouched: any = () => {};
}
