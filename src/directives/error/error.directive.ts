import { Directive } from '@angular/core';

@Directive({
  selector: 'ks-error, [ksError]',
  standalone: true,
  host: {
    class: 'ks-form-field-error',
    'aria-atomic': 'true'
  }
})
export class ErrorDirective {
  constructor() {}
}
