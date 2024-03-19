import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumProperty',
  standalone: true
})
export class EnumPropertyPipe<T extends object>
  implements PipeTransform
{
  transform(
    property: keyof T | undefined | null,
    map: T | undefined
  ): T[keyof T] | null {
    if (!property || !map || !(property in map)) {
      return null;
    }

    return map[property];
  }
}
