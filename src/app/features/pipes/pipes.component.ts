import { Component } from '@angular/core';
import { FormatBytesPipe } from '@ngx-ks/pipes/format-bytes';
import { KsDividerComponent } from '@ngx-ks/divider';
import { MemoPipe } from '@ngx-ks/pipes/memo';
import { EllipsisPipe } from '@ngx-ks/pipes/ellipsis';
import { DefaultValuePipe } from '@ngx-ks/pipes/default-value';
import { EnumPropertyPipe } from '@ngx-ks/pipes/enum-property';
import { TruncatePipe } from '@ngx-ks/pipes/truncate';
import { FirstPipe } from '@ngx-ks/pipes/first';
import { LastPipe } from '@ngx-ks/pipes/last';

@Component({
  selector: 'ks-pipes',
  standalone: true,
  imports: [
    FormatBytesPipe,
    KsDividerComponent,
    MemoPipe,
    EllipsisPipe,
    DefaultValuePipe,
    EnumPropertyPipe,
    TruncatePipe,
    FirstPipe,
    LastPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  divideTwo(value: number): number {
    return value / 2;
  }
}
