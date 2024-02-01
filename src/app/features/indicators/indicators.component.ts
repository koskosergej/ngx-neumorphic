import { Component } from '@angular/core';
import { ProgressBarComponent } from '@ngx-ks/progress-bar';

@Component({
  selector: 'ks-indicators',
  standalone: true,
  imports: [ProgressBarComponent],
  templateUrl: './indicators.component.html',
  styleUrl: './indicators.component.scss'
})
export class IndicatorsComponent {}
