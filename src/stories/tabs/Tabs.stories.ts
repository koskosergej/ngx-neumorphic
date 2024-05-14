import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { TabComponent, TabsComponent } from '@ngx-ks/tabs';

@Component({
  standalone: true,
  imports: [TabComponent, TabsComponent],
  template: ` <ks-tabs>
    <ks-tab title="Tab 1">
      <!-- Tab 1 content goes here -->
      <p>Content of Tab 1</p>
    </ks-tab>
    <ks-tab title="Tab 2">
      <!-- Tab 2 content goes here -->
      <p>Content of Tab 2</p>
    </ks-tab>
  </ks-tabs>`
})
class Tabs {}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Tabs> = {
  title: 'Example/Tabs',
  component: Tabs,
  render: (args: Tabs) => ({
    props: {
      ...args
    }
  }),
  argTypes: {}
};

export default meta;
type Story = StoryObj<Tabs>;

export const Default: Story = {
  args: {}
};
