import { ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'input[neo-input]',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  styles: [`
    @use '../core/palette';

    .neumorphic-input {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 8px;
      background-color: palette.$background-color;
      box-shadow: inset 2px 2px 3px palette.$outer-box-shadow, inset -1px -1px 2px palette.$inner-box-shadow;
      transition: box-shadow 0.3s ease-in-out;
      font-size: 16px;
      outline: none;

      &:hover {
        box-shadow: inset 5px 5px 10px palette.$outer-box-shadow, inset -5px -5px 10px palette.$inner-box-shadow;
      }

      &:focus {
        box-shadow: inset 5px 5px 10px palette.$outer-box-shadow, inset -5px -5px 10px palette.$inner-box-shadow;
      }

      &:disabled {
        opacity: .5;
        color: palette.$disabled-color;
        background: linear-gradient(0deg, palette.$disabled-color, palette.$disabled-color), inherit;
        box-shadow: inset 1px 1px 2px palette.$disabled-color, inset -1px -1px 2px palette.$inner-box-shadow;
      }
    }

  `],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NeoInput {
  constructor(private el: ElementRef) {
    const element = el.nativeElement;
    const classList = (element as HTMLElement).classList;
    classList.add('neumorphic-input');
  }
}
