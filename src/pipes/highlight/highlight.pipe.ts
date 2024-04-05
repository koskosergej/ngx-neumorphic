import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {
  transform(
    value?: string | null,
    searchTerm?: string | null
  ): string | null | undefined {
    if (!value || !searchTerm) {
      return value;
    }

    const regex = new RegExp(searchTerm, 'gi');

    return value.replace(
      regex,
      (match) => `<span class="highlighted">${match}</span>`
    );
  }
}
