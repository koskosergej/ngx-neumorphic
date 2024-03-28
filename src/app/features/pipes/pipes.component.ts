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
import { UniquePipe } from '@ngx-ks/pipes/unique';
import { JsonPipe } from '@angular/common';
import { JoinPipe } from '@ngx-ks/pipes/join';
import { SplitPipe } from '@ngx-ks/pipes/split';

type UniquePipeItem = { id: number; name: string };

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
    LastPipe,
    UniquePipe,
    JsonPipe,
    JoinPipe,
    SplitPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  uniquePipeCollection = [
    { id: 1, name: '1' },
    {
      id: 1,
      name: '1'
    },
    { id: 2, name: '2' }
  ] satisfies UniquePipeItem[];
  id = 'id' as keyof UniquePipeItem;

  divideTwo(value: number): number {
    return value / 2;
  }
}
