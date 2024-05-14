import { Component } from '@angular/core';
import { ProgressBarComponent } from '@ngx-ks/progress-bar';
import { KsDividerComponent } from '@ngx-ks/divider';
import { PillComponent } from '@ngx-ks/pill';

@Component({
  selector: 'ks-indicators',
  standalone: true,
  imports: [
    ProgressBarComponent,
    KsDividerComponent,
    PillComponent
  ],
  templateUrl: './indicators.component.html',
  styleUrl: './indicators.component.scss'
})
export class IndicatorsComponent {}
