import type { Meta, StoryObj } from '@storybook/angular';
import CardComponent from './card.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<CardComponent> = {
  title: 'Example/Card',
  component: CardComponent,
  render: (args: CardComponent) => ({
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
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    withHeader: true,
    withFooter: true,
    withBody: true
  }
};
export const WithoutFooter: Story = {
  args: {
    withHeader: true,
    withFooter: false,
    withBody: true
  }
};
export const WithoutHeader: Story = {
  args: {
    withHeader: false,
    withFooter: true,
    withBody: true
  }
};
