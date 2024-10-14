import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { PillComponent } from '@ngx-ks/pill';

@Component({
  standalone: true,
  imports: [PillComponent],
  template: ` <ks-pill>Pill</ks-pill>`
})
class Pill {}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Pill> = {
  title: 'Example/Pill',
  component: Pill,
  render: (args: Pill) => ({
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
type Story = StoryObj<Pill>;

export const Default: Story = {
  args: {}
};
