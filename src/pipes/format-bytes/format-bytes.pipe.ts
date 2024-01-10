import { Pipe, PipeTransform } from '@angular/core';

const k = 1024;
const sizes = ['b', 'Kb', 'Mb', 'Gb', 'Tb'];

@Pipe({
  name: 'formatBytes',
  standalone: true
})
export class FormatBytesPipe implements PipeTransform {
  transform(
    value?: number | null,
    decimals = 2
  ): string | null {
    if (value === null || value === undefined) {
      return null;
    }

    if (value === 0) {
      return '0 b';
    }
    const i = Math.floor(Math.log(value) / Math.log(k));

    const dm = decimals < 0 ? 0 : decimals;
    return (
      parseFloat((value / Math.pow(k, i)).toFixed(dm)) +
      ' ' +
      sizes[i]
    );
  }
}
