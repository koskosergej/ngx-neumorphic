import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule } from '@angular/forms';
import { SelectorOption, SelectorOptions } from './type';
import { NgFor } from '@angular/common';

@Component({
  selector: 'neo-selector',
  standalone: true,
  imports: [
    FormsModule,
    NgFor
  ],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss'
})
export class NeoSelectorComponent implements ControlValueAccessor {
  selectedValue: SelectorOption['value'];

  @Input() options!: SelectorOptions;

  disabled = false;

  constructor() {
  }

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

  private onChange: any = () => {
  };

  private onTouched: any = () => {
  };
}
