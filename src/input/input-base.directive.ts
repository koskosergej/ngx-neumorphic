import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[neoInputBase]',
  standalone: true
})
export class InputBaseDirective {

  constructor(public _elementRef: ElementRef) {
    const element = _elementRef.nativeElement;
    const classList = (element as HTMLElement).classList;
    classList.add('neumorphic-input');
  }

}
