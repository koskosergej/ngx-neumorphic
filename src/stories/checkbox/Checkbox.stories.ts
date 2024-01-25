import type { Meta, StoryObj } from '@storybook/angular';
import CheckboxStoryBookComponent from './checkbox.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<CheckboxStoryBookComponent> = {
  title: 'Example/Checkbox',
  component: CheckboxStoryBookComponent,
  render: (args: CheckboxStoryBookComponent) => ({
    props: {
      ...args
    }
  }),
  argTypes: {}
};

export default meta;
type Story = StoryObj<CheckboxStoryBookComponent>;

export const Default: Story = {
  args: {
    label: 'label checkbox'
  }
};
export const Disabled: Story = {
  args: {
    label: 'disabled checkbox',
    disabled: true,
    value: false
  }
};
