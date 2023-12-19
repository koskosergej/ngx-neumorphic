import { ChangeDetectionStrategy, Component, ContentChildren, QueryList, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDirective } from '@ngx-ks/error';

@Component({
  selector: 'ks-form-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent {
  @ContentChildren(ErrorDirective, { descendants: true }) _errorChildren?: QueryList<ErrorDirective>;
}
