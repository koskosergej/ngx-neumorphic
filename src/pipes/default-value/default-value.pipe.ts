import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultValue',
  standalone: true
})
export class DefaultValuePipe<T, K>
  implements PipeTransform
{
  transform(value: T, defaultValue: K): T | K {
    if (value === undefined || value === null) {
      return defaultValue;
    }

    return value;
  }
}
