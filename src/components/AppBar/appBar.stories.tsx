import type { Meta, StoryObj } from '@storybook/nextjs';

import data from "@/data/transactions.json";
import AppBar from './index';

const meta = {
  title: 'Pages/Header',
  component: AppBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) =>(
      <div style={{minWidth: '230px'}}>
        <Story />
      </div>
    ),
  ]
} satisfies Meta<typeof AppBar>;

export default meta;

type Story = StoryObj<typeof meta>;

function dataMockName(): string {
  const { user } = data;
  return user[0].name;
}

export const Visual: Story = {
  args: {
    name: dataMockName()
  }
};