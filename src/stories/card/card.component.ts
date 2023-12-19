import { Component, Input } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { ksCardBodyDirective, KsCardComponent, ksCardFooterDirective, ksCardHeaderDirective } from '@ngx-ks/card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'storybook-card',
  imports: [KsCardComponent, WrapperComponent, ksCardHeaderDirective, ksCardBodyDirective, ksCardFooterDirective, NgIf],
  template: `
    <ks-storybook-wrapper>
      <div class="card-container">
        <ks-card>
          <div ksCardHeader *ngIf="withHeader">Card Header</div>

          <div ksCardBody *ngIf="withBody">Card body</div>

          <div ksCardFooter *ngIf="withFooter">Card Footer</div>
        </ks-card>
      </div>
    </ks-storybook-wrapper>
  `,
  standalone: true,
  styles: [
    `
      .card-container {
        max-width: 400px;
      }
    `
  ]
})
export default class CardComponent {
  @Input() withHeader = false;
  @Input() withBody = false;
  @Input() withFooter = false;
}
