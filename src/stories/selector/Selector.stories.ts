import type { Meta, StoryObj } from '@storybook/angular';
import SelectorComponent from './selector.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<SelectorComponent> = {
  title: 'Example/Selector',
  component: SelectorComponent,
  render: (args: SelectorComponent) => ({
    props: {
      ...args
    }
  }),
  argTypes: {}
};

export default meta;
type Story = StoryObj<SelectorComponent>;

export const Default: Story = {
  args: {}
};
export const Disabled: Story = {
  args: {
    disabled: true
  }
};
