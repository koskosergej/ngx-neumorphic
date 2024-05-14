import { Component } from '@angular/core';
import {
  KsCardBodyDirective,
  KsCardComponent,
  KsCardFooterDirective,
  KsCardHeaderDirective
} from '@ngx-ks/card';
import { NgIf } from '@angular/common';
import { KsDividerComponent } from '@ngx-ks/divider';
import { DialogComponent } from '@ngx-ks/dialog';
import { KsButton } from '@ngx-ks/button';
import { TabComponent, TabsComponent } from '@ngx-ks/tabs';

@Component({
  selector: 'ks-layout',
  standalone: true,
  imports: [
    KsCardComponent,
    KsCardFooterDirective,
    KsCardHeaderDirective,
    KsCardBodyDirective,
    NgIf,
    KsDividerComponent,
    DialogComponent,
    KsButton,
    TabsComponent,
    TabComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  isOpenDialog = false;
}
