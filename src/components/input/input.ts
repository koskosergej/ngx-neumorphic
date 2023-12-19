import { ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'input[ks-input]',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  styleUrls: [`./input.scss`],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KsInput {
  constructor(private el: ElementRef) {
    const element = el.nativeElement;
    const classList = (element as HTMLElement).classList;
    classList.add('ks-input');
  }
}
