import { Component } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { TableComponent } from '@ngx-ks/table';

@Component({
  selector: 'storybook-button',
  imports: [TableComponent, WrapperComponent],
  template: `
    <ks-storybook-wrapper>
      <ks-table
        [columns]="['name', 'age', 'Occupation']"
        [data]="[
          {
            name: 'John Doe',
            age: 30,
            Occupation: 'Engineer',
            id: '42'
          },
          {
            name: 'Jane Smith',
            age: 25,
            Occupation: 'Designer',
            id: '43'
          },
          {
            name: 'Sam Johnson',
            age: 40,
            Occupation: 'Manager',
            id: '44'
          }
        ]"
      ></ks-table>
    </ks-storybook-wrapper>
  `,
  standalone: true
})
export default class TableStoryComponent {}
