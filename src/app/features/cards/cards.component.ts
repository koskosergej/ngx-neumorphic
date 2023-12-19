import { Component } from '@angular/core';
import { KsCardBodyDirective, KsCardComponent, KsCardFooterDirective, KsCardHeaderDirective } from '@ngx-ks/card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ks-cards',
  standalone: true,
  imports: [KsCardComponent, KsCardFooterDirective, KsCardHeaderDirective, KsCardBodyDirective, NgIf],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {}
