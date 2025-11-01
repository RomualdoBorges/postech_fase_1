import type { Meta, StoryObj } from '@storybook/nextjs';

import Balance from './index';

const meta = {
  title: 'Pages/Balance',
  component: Balance,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Balance>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Usuario: Story = {
  args: {
    nickname: 'Usuário',
    balance: 99.99
  },
};