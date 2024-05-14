import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import {
  JsonPipe,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from '@angular/common';

@Component({
  selector: 'ks-tabs',
  standalone: true,
  imports: [
    TabComponent,
    NgForOf,
    NgTemplateOutlet,
    NgIf,
    JsonPipe
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent, {
    descendants: true
  })
  public tabs: QueryList<TabComponent> = undefined!;
  selectedTabIndex: number = 0;

  constructor() {}

  selectTab(index: number): void {
    this.selectedTabIndex = index;
    if (this.tabs) {
      this.tabs.forEach((tab, i) => {
        tab.active = i === index;
      });
    }
  }

  ngAfterContentInit() {
    this.selectTab(this.selectedTabIndex);
  }
}
