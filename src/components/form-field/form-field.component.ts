import { ChangeDetectionStrategy, Component, ContentChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KsFormFieldControl } from '@ngx-ks/form-field-control';
import { KsLabel } from '@ngx-ks/label';

@Component({
  selector: 'ks-form-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent {
  @ContentChild(KsFormFieldControl) formFieldControl: KsFormFieldControl | undefined;
  @ContentChild(KsLabel) contentLabel?: KsLabel;
}
