import { Component } from '@angular/core';
import { ProgressBarComponent } from '@ngx-ks/progress-bar';
import { KsDividerComponent } from '@ngx-ks/divider';
import { PillComponent } from '@ngx-ks/pill';
import { StatusIndicatorComponent } from '@ngx-ks/status-indicator';

@Component({
  selector: 'ks-indicators',
  standalone: true,
  imports: [
    ProgressBarComponent,
    KsDividerComponent,
    PillComponent,
    StatusIndicatorComponent
  ],
  templateUrl: './indicators.component.html',
  styleUrl: './indicators.component.scss'
})
export class IndicatorsComponent {}
