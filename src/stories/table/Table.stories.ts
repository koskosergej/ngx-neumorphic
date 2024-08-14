import type { Meta, StoryObj } from '@storybook/angular';
import TableStoryComponent from './table.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<TableStoryComponent> = {
  title: 'Example/Table',
  component: TableStoryComponent,
  render: (args: TableStoryComponent) => ({
    props: {
      ...args
    }
  }),
  argTypes: {}
};

export default meta;
type Story = StoryObj<TableStoryComponent>;

export const Default: Story = {
  args: {}
};
