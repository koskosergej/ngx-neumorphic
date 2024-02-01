import { Component } from '@angular/core';
import {
  KsCardBodyDirective,
  KsCardComponent,
  KsCardFooterDirective,
  KsCardHeaderDirective
} from '@ngx-ks/card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ks-layout',
  standalone: true,
  imports: [
    KsCardComponent,
    KsCardFooterDirective,
    KsCardHeaderDirective,
    KsCardBodyDirective,
    NgIf
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {}
