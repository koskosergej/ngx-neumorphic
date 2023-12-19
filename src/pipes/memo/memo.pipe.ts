import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memo',
  standalone: true
})
export class MemoPipe<T, K, Z, Q> implements PipeTransform {
  transform(value: T, handler: (value: T, ...args: K[]) => Z, context?: Q, ...args: Array<K>): Z {
    if (context && handler) {
      return handler.apply(context, [value, ...args]);
    }

    return handler(value, ...args);
  }
}
