import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idToValue',
  standalone: true
})
export class IdToValuePipe<T extends object>
  implements PipeTransform
{
  transform(
    id: keyof T | null,
    dictionary: T
  ): T[keyof T] | null {
    if (!dictionary || id == null) {
      return null;
    }

    return dictionary[id] ?? null;
  }
}
