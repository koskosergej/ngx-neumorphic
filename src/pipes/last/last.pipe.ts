import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'last',
  standalone: true
})
export class LastPipe<T> implements PipeTransform {
  transform(list?: Array<T> | null): T | null {
    if (!list || !list.length || !Array.isArray(list)) {
      return null;
    }

    return list[list.length - 1] ?? null;
  }
}
