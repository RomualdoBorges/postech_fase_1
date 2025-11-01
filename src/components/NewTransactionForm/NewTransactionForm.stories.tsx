import type { Meta, StoryObj } from '@storybook/nextjs';

import styles from "../NewTransaction/NewTransaction.module.css";
import NewTransactionForm from './index';

const meta = {
  title: 'Pages/Components/Formulário de Nova Transação',
  component: NewTransactionForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
        <div className={styles.container}>
            <Story />
        </div>
    )
  ]
} satisfies Meta<typeof NewTransactionForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const novaTransação: Story = {};