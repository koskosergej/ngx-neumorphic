import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Optional,
  Self,
  ViewEncapsulation
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { KsFormFieldControl } from '@ngx-ks/form-field-control';
import { NgControl, Validators } from '@angular/forms';

@Component({
  selector: 'input[ks-input]',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  styleUrls: [`./input.scss`],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: KsFormFieldControl, useExisting: KsInput }]
})
export class KsInput implements KsFormFieldControl {
  constructor(
    private el: ElementRef,
    @Optional() @Self() public ngControl: NgControl
  ) {
    const element = el.nativeElement;
    const classList = (element as HTMLElement).classList;
    classList.add('ks-input');
  }

  protected _required: boolean | undefined;

  @Input()
  get required(): boolean {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }

  set required(value: boolean) {
    this._required = value;
  }

  protected _disabled: boolean | undefined;

  @Input()
  get disabled(): boolean {
    return this._disabled ?? this.ngControl.disabled ?? false;
  }

  set disabled(value: boolean) {
    this._disabled = value;
  }
}
