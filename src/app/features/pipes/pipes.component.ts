import { Component } from '@angular/core';
import { FormatBytesPipe } from '@ngx-ks/pipes/format-bytes';
import { KsDividerComponent } from '@ngx-ks/divider';
import { MemoPipe } from '@ngx-ks/pipes/memo';

@Component({
  selector: 'ks-pipes',
  standalone: true,
  imports: [FormatBytesPipe, KsDividerComponent, MemoPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  divideTwo(value: number): number {
    return value / 2;
  }
}
