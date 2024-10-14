import type { Meta, StoryObj } from '@storybook/angular';
import Input from './unit-input.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Input> = {
  title: 'Example/Unit Input',
  component: Input,
  render: (args: Input) => ({
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
type Story = StoryObj<Input>;

export const Default: Story = {
  args: {}
};
