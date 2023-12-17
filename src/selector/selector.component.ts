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
  template: `
      <div class="neumorphic-selector-wrapper">
          <select (change)="optionsSelected()" [(ngModel)]="selectedValue" [disabled]="disabled"
                  class="neumorphic-selector">
              <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
          </select>
      </div>
  `,
  styles: [`
    @use '../core/palette';

    .neumorphic-selector-wrapper {
      display: inline-block;
    }

    .neumorphic-selector {
      padding: 10px;
      border: none;
      border-radius: 8px;
      background-color: #f0f0f0;
      box-shadow: inset 2px 2px 3px palette.$outer-box-shadow, inset -1px -1px 2px palette.$inner-box-shadow;
      transition: box-shadow 0.3s ease-in-out;
      font-size: 16px;
      outline: none;
      cursor: pointer;

      &:hover {
        box-shadow: inset 5px 5px 10px palette.$outer-box-shadow, inset -5px -5px 10px palette.$inner-box-shadow;
      }

      &:focus {
        box-shadow: inset 5px 5px 10px palette.$outer-box-shadow, inset -5px -5px 10px palette.$inner-box-shadow;
      }

      &:disabled {
        opacity: .5;
        color: palette.$disabled-color;
        background: linear-gradient(0deg, palette.$disabled-color, palette.$disabled-color), inherit;
        box-shadow: inset 1px 1px 2px palette.$disabled-color, inset -1px -1px 2px palette.$inner-box-shadow;
        cursor: no-drop;
      }
    }
  `]
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
