import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'ks-table',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent<
  T extends { id: string | number } & Record<
    string,
    string | number
  >
> {
  @Input() columns: string[] = [];
  @Input() data: T[] = [];
}
