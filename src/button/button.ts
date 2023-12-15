import { ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'button[neo-button]',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  styles: [`
    @use '../core/palette';

    .neumorphic-button {
      padding: 15px 30px;
      border: none;
      border-radius: 10px;
      background-color: palette.$background-color;
      box-shadow: 5px 5px 10px palette.$outer-box-shadow, -5px -5px 10px palette.$inner-box-shadow;
      transition: box-shadow 0.3s ease-in-out;
      color: palette.$label-color;

      &:hover {
        box-shadow: 7px 7px 15px palette.$outer-box-shadow, -7px -7px 15px palette.$inner-box-shadow;
      }

      &:active {
        box-shadow: inset 5px 5px 10px palette.$outer-box-shadow,
        inset -5px -5px 10px palette.$inner-box-shadow;
      }

      &:disabled {
        color: palette.$disabled-color;
        opacity: .5;
        cursor: no-drop;
        box-shadow: 1px 1px 2px palette.$outer-box-shadow, inset -1px -1px 2px palette.$inner-box-shadow;
      }
    }

  `],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NeoButton {
  constructor(private el: ElementRef) {
    const element = el.nativeElement;
    const classList = (element as HTMLElement).classList;
    classList.add('neumorphic-button');
  }
}
