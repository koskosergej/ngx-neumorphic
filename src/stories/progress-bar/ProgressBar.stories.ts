import type { Meta, StoryObj } from '@storybook/angular';
import ProgressBar from './progress-bar.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ProgressBar> = {
  title: 'Example/ProgressBar',
  component: ProgressBar,
  render: (args: ProgressBar) => ({
    props: {
      ...args
    }
  }),
  argTypes: {}
};

export default meta;
type Story = StoryObj<ProgressBar>;

export const Default: Story = {
  args: {
    progress: 50
  }
};
