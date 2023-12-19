import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KsRadioButtonComponent } from '../radio-button/radio-button.component';

@Component({
  selector: 'ks-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KsRadioGroupComponent),
      multi: true
    }
  ],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KsRadioGroupComponent implements ControlValueAccessor, AfterContentInit {
  @ContentChildren(KsRadioButtonComponent) radioButtons!: QueryList<KsRadioButtonComponent>;

  constructor() {}

  ngAfterContentInit(): void {
    this.radioButtons.forEach((button) => {
      button.registerOnChange(this.onRadioButtonChange.bind(this));
      button.name = 'name';
    });
  }

  // ControlValueAccessor methods
  writeValue(value: any): void {
    this.radioButtons.forEach((button) => {
      button.writeValue(value);
    });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement if needed
  }

  onRadioButtonChange(value: any): void {
    this.onChange(value);
    this.onTouched();
  }

  // Functions to propagate changes and touch events
  private onChange: any = () => {};

  private onTouched: any = () => {};
}
