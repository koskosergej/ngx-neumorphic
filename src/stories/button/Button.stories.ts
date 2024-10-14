import type { Meta, StoryObj } from '@storybook/angular';
import Button from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Button> = {
  title: 'Example/Button',
  component: Button,
  render: (args: Button) => ({
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
type Story = StoryObj<Button>;

export const Default: Story = {
  args: {
    label: 'Button'
  }
};
export const Disabled: Story = {
  args: {
    label: 'Button',
    disabled: true
  }
};
