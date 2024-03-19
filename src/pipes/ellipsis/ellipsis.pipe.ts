import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
  standalone: true
})
export class EllipsisPipe implements PipeTransform {
  transform(
    value: string | null | undefined,
    length: number,
    suffix = '...'
  ): string {
    if (!value || length <= 0) {
      return '';
    }

    if (value.length > length) {
      return value.slice(0, length) + suffix;
    }

    return value;
  }
}
