import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'button[ks-button]',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  styleUrls: ['./button.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KsButton {
  constructor(private el: ElementRef) {
    const element = el.nativeElement;
    const classList = (element as HTMLElement).classList;
    classList.add('ks-button');
  }
}
