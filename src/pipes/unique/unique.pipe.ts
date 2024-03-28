import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique',
  standalone: true
})
export class UniquePipe<T> implements PipeTransform {
  transform(
    collection?: T[] | null,
    identifier?: keyof T
  ): T[] {
    if (!collection || collection.length === 0) {
      return [];
    }

    if (!identifier) {
      return [...new Set(collection)];
    }

    const ids = collection.map((item) => item[identifier]);
    const uniqueIds = [...new Set(ids)];
    return uniqueIds.reduce((acc, id) => {
      const item = collection.find(
        (item) => item[identifier] === id
      );

      if (!item) {
        return acc;
      }

      acc.push(item);

      return acc.filter(Boolean);
    }, [] as T[]);
  }
}
