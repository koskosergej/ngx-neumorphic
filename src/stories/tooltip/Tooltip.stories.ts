import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { TooltipComponent } from '@ngx-ks/tooltip';
import { KsButton } from '@ngx-ks/button';

@Component({
  standalone: true,
  imports: [TooltipComponent, KsButton],
  template: ` <ks-tooltip message="This is a tooltip!">
    <button ks-button>Hover me</button>
  </ks-tooltip>`
})
class Tooltip {}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Tooltip> = {
  title: 'Example/Tooltip',
  component: Tooltip,
  render: (args: Tooltip) => ({
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
type Story = StoryObj<Tooltip>;

export const Default: Story = {
  args: {}
};
