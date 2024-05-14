import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ks-pill',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pill.component.html',
  styleUrl: './pill.component.scss'
})
export class PillComponent {}
