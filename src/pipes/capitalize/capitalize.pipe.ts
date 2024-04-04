import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {
  transform(value?: string | null): string {
    if (!value) {
      return '';
    }

    let isMatch = false;

    return String(value).replace(/\b[a-z]/g, function ($1) {
      if (!isMatch) {
        isMatch = true;
        return $1.toUpperCase();
      }
      return $1;
    });
  }
}
