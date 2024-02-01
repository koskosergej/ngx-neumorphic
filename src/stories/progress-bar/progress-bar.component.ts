import { Component, Input } from '@angular/core';
import { ProgressBarComponent } from '@ngx-ks/progress-bar';

@Component({
  selector: 'ks-progress-bar-storybook',
  standalone: true,
  imports: [ProgressBarComponent],
  template: `
    <ks-progress-bar
      [progress]="progress"
    ></ks-progress-bar>
  `
})
export default class ProgressBarStoryComponent {
  @Input() progress = 0;
}
