import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userName',
  standalone: true
})
export class UserNamePipe<
  T extends {
    firstName?: string | null;
    lastName?: string | null;
  }
> implements PipeTransform
{
  transform(user?: T | null): string | null {
    if (!user) {
      return null;
    }

    const { firstName, lastName } = user;
    return [firstName, lastName]
      .map((item) => item?.trimStart()?.trimEnd())
      .filter(Boolean)
      .join(' ');
  }
}
