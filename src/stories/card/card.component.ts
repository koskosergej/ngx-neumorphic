import { Component, Input } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import {
  NeoCardBodyDirective,
  NeoCardComponent,
  NeoCardFooterDirective,
  NeoCardHeaderDirective
} from '@ngx-neoumorphic/card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'storybook-card',
  imports: [
    NeoCardComponent,
    WrapperComponent,
    NeoCardHeaderDirective,
    NeoCardBodyDirective,
    NeoCardFooterDirective,
    NgIf
  ],
  template: `
    <neo-storybook-wrapper>
      <div class="card-container">
        <neo-card>
          <div neoCardHeader *ngIf="withHeader">Card Header</div>

          <div neoCardBody *ngIf="withBody">Card body</div>

          <div neoCardFooter *ngIf="withFooter">Card Footer</div>
        </neo-card>
      </div>
    </neo-storybook-wrapper>
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
