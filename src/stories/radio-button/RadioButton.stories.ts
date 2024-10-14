import type { Meta, StoryObj } from '@storybook/angular';
import RadioButtonComponent from './radio-button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<RadioButtonComponent> = {
  title: 'Example/RadioButton',
  component: RadioButtonComponent,
  render: (args: RadioButtonComponent) => ({
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
type Story = StoryObj<RadioButtonComponent>;

export const Default: Story = {
  args: {}
};
