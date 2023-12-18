import type { Meta, StoryObj } from '@storybook/angular';
import TextareaComponent from './textarea.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<TextareaComponent> = {
  title: 'Example/Textarea',
  component: TextareaComponent,
  render: (args: TextareaComponent) => ({
    props: {
      ...args
    }
  }),
  argTypes: {}
};

export default meta;
type Story = StoryObj<TextareaComponent>;

export const Default: Story = {
  args: {}
};
export const Disabled: Story = {
  args: {
    disabled: true
  }
};
