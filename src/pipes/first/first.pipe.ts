import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first',
  standalone: true
})
export class FirstPipe<T> implements PipeTransform {
  transform(list?: Array<T> | null): T | null {
    if (!list || !list.length || !Array.isArray(list)) {
      return null;
    }

    return list[0] ?? null;
  }
}
