import { ChangeDetectionStrategy, Component, ContentChildren, QueryList, ViewEncapsulation } from '@angular/core';
import { KsCardBodyDirective } from './card-body.directive';
import { KsCardHeaderDirective } from './card-header.directive';
import { KsCardFooterDirective } from './card-footer.directive';
import { JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'ks-card',
  standalone: true,
  imports: [KsCardBodyDirective, KsCardHeaderDirective, KsCardFooterDirective, NgIf, JsonPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KsCardComponent {
  @ContentChildren(KsCardHeaderDirective) cardHeaderList?: QueryList<KsCardHeaderDirective>;
  @ContentChildren(KsCardBodyDirective) cardBodyList?: QueryList<KsCardBodyDirective>;
  @ContentChildren(KsCardFooterDirective) cardFooterList?: QueryList<KsCardFooterDirective>;
}
