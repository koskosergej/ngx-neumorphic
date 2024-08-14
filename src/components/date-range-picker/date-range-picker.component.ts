import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ks-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss'],
  imports: [FormsModule],
  standalone: true
})
export class DateRangePickerComponent {
  @Input() startDate: string = '';
  @Input() endDate: string = '';

  onStartDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.startDate = input.value;
  }

  onEndDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.endDate = input.value;
  }
}
