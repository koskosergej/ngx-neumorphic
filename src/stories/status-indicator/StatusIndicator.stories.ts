import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { StatusIndicatorComponent } from '@ngx-ks/status-indicator';

@Component({
  standalone: true,
  imports: [StatusIndicatorComponent],
  template: ` <ks-status-indicator
    status="success"
  ></ks-status-indicator>`
})
class StatusIndicator {}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<StatusIndicator> = {
  title: 'Example/StatusIndicator',
  component: StatusIndicator,
  render: (args: StatusIndicator) => ({
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
type Story = StoryObj<StatusIndicator>;

export const Default: Story = {
  args: {}
};
