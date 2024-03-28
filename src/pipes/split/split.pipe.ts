import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split',
  standalone: true
})
export class SplitPipe implements PipeTransform {
  transform(
    value?: string | null,
    splitter?: string | RegExp | null
  ): string[] | null {
    if (!value || !splitter) {
      return null;
    }

    return value.split(splitter);
  }
}
