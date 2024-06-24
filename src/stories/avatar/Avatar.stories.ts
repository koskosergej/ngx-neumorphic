import type { Meta, StoryObj } from '@storybook/angular';
import AvatarStoryComponent from './avatar.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<AvatarStoryComponent> = {
  title: 'Example/Avatar',
  component: AvatarStoryComponent,
  render: (args: AvatarStoryComponent) => ({
    props: {
      ...args
    }
  }),
  argTypes: {}
};

export default meta;
type Story = StoryObj<AvatarStoryComponent>;

export const Default: Story = {
  args: {
    imageUrl: 'assets/placeholder.png' as never,
    size: 100 as never
  }
};
