import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatBytes',
  standalone: true
})
export class FormatBytesPipe implements PipeTransform {
  transform(value: number, decimals = 2): string {
    if (value === 0) {
      return '0';
    } else {
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ['b', 'Kb', 'Mb', 'Gb', 'Tb'];
      const i = Math.floor(Math.log(value) / Math.log(k));

      return parseFloat((value / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
  }
}
