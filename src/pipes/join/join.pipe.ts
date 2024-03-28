import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
  standalone: true
})
export class JoinPipe<T> implements PipeTransform {
  transform(
    collection?: T[] | null,
    separator?: string
  ): string | null {
    if (!collection || collection.length === 0) {
      return null;
    }

    return collection.join(separator);
  }
}
