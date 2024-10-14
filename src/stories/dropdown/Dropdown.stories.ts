import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { DropdownComponent } from '@ngx-ks/dropdown';

@Component({
  standalone: true,
  imports: [DropdownComponent],
  template: ` <ks-dropdown
    [options]="['42', '100']"
  ></ks-dropdown>`
})
class Dropdown {}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Dropdown> = {
  title: 'Example/Dropdown',
  component: Dropdown,
  render: (args: Dropdown) => ({
    props: {
      ...args
    }
  }),
  parameters: {
    layout: 'centered'
  },
  argTypes: {}
};

export default meta;
type Story = StoryObj<Dropdown>;

export const Default: Story = {
  args: {}
};
