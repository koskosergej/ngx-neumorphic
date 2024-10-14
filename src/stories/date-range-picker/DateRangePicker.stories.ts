import type { Meta, StoryObj } from '@storybook/angular';
import DateRangePickerStoryComponent from './date-range-picker.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<DateRangePickerStoryComponent> = {
  title: 'Example/DateRangePicker',
  component: DateRangePickerStoryComponent,
  render: (args: DateRangePickerStoryComponent) => ({
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
type Story = StoryObj<DateRangePickerStoryComponent>;

export const Default: Story = {
  args: {}
};
