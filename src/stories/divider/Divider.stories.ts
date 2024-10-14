import type { Meta, StoryObj } from '@storybook/angular';
import Divider from './divider.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Divider> = {
  title: 'Example/Divider',
  component: Divider,
  render: (args: Divider) => ({
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
type Story = StoryObj<Divider>;

export const Default: Story = {
  args: {}
};
