import type { Meta, StoryObj } from '@storybook/nextjs';

import NewTransaction from './index';

const meta = {
  title: 'Components/Nova Transação',
  component: NewTransaction,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NewTransaction>;

export default meta;

type Story = StoryObj<typeof meta>;

export const novaTransação: Story = {};