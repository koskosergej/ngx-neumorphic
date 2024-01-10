import {
  AbstractControlDirective,
  NgControl
} from '@angular/forms';
import { Directive } from '@angular/core';

@Directive()
export abstract class KsFormFieldControl {
  // @ts-expect-error abstract directive field
  readonly ngControl:
    | NgControl
    | AbstractControlDirective
    | null;
  // @ts-expect-error abstract directive field
  readonly required: boolean;
  // @ts-expect-error abstract directive field
  readonly disabled: boolean;
}
