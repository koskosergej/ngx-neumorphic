import { ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { ButtonBaseDirective } from './button-base.directive';

@Component({
  selector: 'button[neo-button]',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NeoButton extends ButtonBaseDirective {
  constructor(private el: ElementRef) {
    super(el);
  }
}
