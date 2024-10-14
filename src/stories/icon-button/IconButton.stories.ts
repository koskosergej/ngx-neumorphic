import type { Meta, StoryObj } from '@storybook/angular';
import Button from './icon-button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Button> = {
  title: 'Example/Icon Button',
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
  args: {}
};
export const Disabled: Story = {
  args: {
    disabled: true
  }
};
