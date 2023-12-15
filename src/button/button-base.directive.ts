import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[neoButtonBase]',
  standalone: true
})
export class ButtonBaseDirective {

  constructor(public _elementRef: ElementRef) {
    const element = _elementRef.nativeElement;
    const classList = (element as HTMLElement).classList;
    classList.add('neumorphic-button');
  }

}
