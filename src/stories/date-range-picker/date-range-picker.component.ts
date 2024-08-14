import { Component } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { DateRangePickerComponent } from '@ngx-ks/date-range-picker';

@Component({
  selector: 'storybook-button',
  imports: [WrapperComponent, DateRangePickerComponent],
  template: `
    <ks-storybook-wrapper>
      <ks-date-range-picker></ks-date-range-picker>
    </ks-storybook-wrapper>
  `,
  standalone: true
})
export default class DateRangePickerStoryComponent {}
