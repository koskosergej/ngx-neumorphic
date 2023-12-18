import { Component } from '@angular/core';
import {
  NeoCardBodyDirective,
  NeoCardComponent,
  NeoCardFooterDirective,
  NeoCardHeaderDirective
} from '@ngx-neoumorphic/card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'neo-cards',
  standalone: true,
  imports: [NeoCardComponent, NeoCardFooterDirective, NeoCardHeaderDirective, NeoCardBodyDirective, NgIf],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {}
