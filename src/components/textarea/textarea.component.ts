import { ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'textarea[ks-textarea]',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  styleUrls: ['./textarea.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KsTextArea {
  constructor(private el: ElementRef) {
    const element = el.nativeElement;
    const classList = (element as HTMLElement).classList;
    classList.add('ks-textarea');
  }
}
