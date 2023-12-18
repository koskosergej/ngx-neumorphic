import type { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { NeoSelectorComponent } from '@ngx-neoumorphic/selector';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'storybook-selector',
  imports: [WrapperComponent, NeoSelectorComponent, ReactiveFormsModule],
  template: `
    <neo-storybook-wrapper>
      <neo-selector
        [formControl]="formCntrl"
        [options]="[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' }
        ]"
      >
      </neo-selector>
    </neo-storybook-wrapper>
  `,
  standalone: true
})
export default class SelectorComponent implements OnInit {
  @Input() disabled = false;

  formCntrl!: FormControl;

  ngOnInit() {
    this.formCntrl = new FormControl({ value: null, disabled: this.disabled });
  }
}
