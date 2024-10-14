import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ks-tooltip',
  standalone: true,
  imports: [NgIf],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
  @Input() message: string = '';
  showTooltip: boolean = false;

  toggleTooltip(show: boolean): void {
    this.showTooltip = show;
  }
}
