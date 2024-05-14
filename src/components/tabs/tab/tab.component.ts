import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ks-tab',
  standalone: true,
  imports: [NgIf],
  templateUrl: './tab.component.html'
})
export class TabComponent {
  @Input() title: string = '';
  public active = false;
}
