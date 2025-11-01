import type { Meta, StoryObj } from '@storybook/nextjs';

import styles from "@/styles/page.module.css";
import data from "@/data/transactions.json";
import { getRecentTransactions } from '@/utils/getRecentTransactions';
import BankStatementList, { BankStatementData } from './index';

const meta = {
  title: 'Pages/Extrato',
  component: BankStatementList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <section className={styles.statement}>
        <Story />
      </section>
    )
  ]
} satisfies Meta<typeof BankStatementList>;

export default meta;

type Story = StoryObj<typeof meta>;

function dataMock(): BankStatementData[] {
  const { transaction } = data;
  return getRecentTransactions(transaction, 4);
}

export const Visual: Story = {
  args: {
    data: dataMock()
  }
};

export const Manipulável: Story = {
  args: {
    buttons: true,
    data: dataMock()
  }
};