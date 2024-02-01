import { Component, Input } from '@angular/core';

@Component({
  selector: 'ks-progress-bar',
  standalone: true,
  imports: [],
  template: `
    <div class="ks-progress-bar">
      <div class="progress-bar-track">
        <div
          class="progress-bar-fill"
          [style.width]="progress + '%'"
        ></div>
      </div>
    </div>
  `,
  styles: [
    `
      @use '../../core/styles/palette';

      .ks-progress-bar {
        width: 100%;
        height: 4px;
        background-color: #f0f0f0;
        box-shadow:
          inset 1px 1px 1px palette.$silver,
          inset -1px -1px 1px palette.$white;
        border-radius: 10px;
        overflow: hidden;
        margin: 5px 0;

        .progress-bar-track {
          height: 100%;
          width: 100%;
          background-color: transparent;
          position: relative;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background-color: palette.$fruitsalad;
          border-radius: 10px;
          transition: width 0.3s ease-in-out;
        }
      }
    `
  ]
})
export class ProgressBarComponent {
  @Input() progress = 0;
}
