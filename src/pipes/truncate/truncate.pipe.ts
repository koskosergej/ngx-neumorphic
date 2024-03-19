import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(
    value?: string | null,
    length?: number | null
  ): string {
    if (!value || !length) {
      return '';
    }

    if (value.length <= length) {
      return value;
    }

    return value.slice(0, length);
  }
}
