import { ChangeDetectionStrategy, Component, ContentChildren, QueryList, ViewEncapsulation } from '@angular/core';
import { NeoCardBodyDirective } from './card-body.directive';
import { NeoCardHeaderDirective } from './card-header.directive';
import { NeoCardFooterDirective } from './card-footer.directive';
import { JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'neo-card',
  standalone: true,
  imports: [NeoCardBodyDirective, NeoCardHeaderDirective, NeoCardFooterDirective, NgIf, JsonPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NeoCardComponent {
  @ContentChildren(NeoCardHeaderDirective) cardHeaderList?: QueryList<NeoCardHeaderDirective>;
  @ContentChildren(NeoCardBodyDirective) cardBodyList?: QueryList<NeoCardBodyDirective>;
  @ContentChildren(NeoCardFooterDirective) cardFooterList?: QueryList<NeoCardFooterDirective>;
}
