import { Component } from '@angular/core';
import { ProgressBarComponent } from '@ngx-ks/progress-bar';
import { KsDividerComponent } from '@ngx-ks/divider';
import { PillComponent } from '@ngx-ks/pill';
import { StatusIndicatorComponent } from '@ngx-ks/status-indicator';
import { TooltipComponent } from '@ngx-ks/tooltip';
import { KsButton } from '@ngx-ks/button';

@Component({
  selector: 'ks-indicators',
  standalone: true,
  imports: [
    ProgressBarComponent,
    KsDividerComponent,
    PillComponent,
    StatusIndicatorComponent,
    TooltipComponent,
    KsButton
  ],
  templateUrl: './indicators.component.html',
  styleUrl: './indicators.component.scss'
})
export class IndicatorsComponent {}
