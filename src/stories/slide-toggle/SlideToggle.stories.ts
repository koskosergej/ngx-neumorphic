import type { Meta, StoryObj } from '@storybook/angular';
import SlideToggleComponent from './slide-toggle.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<SlideToggleComponent> = {
  title: 'Example/SlideToggle',
  component: SlideToggleComponent,
  render: (args: SlideToggleComponent) => ({
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
type Story = StoryObj<SlideToggleComponent>;

export const Default: Story = {
  args: {}
};
