import type { Meta, StoryObj } from '@storybook/nextjs';

import styles from "@/styles/page.module.css";
import { nav } from "@/utils/navData";
import Menu from './index';

const meta = {
  title: 'Pages/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <section className={styles.menu}>
        <Story />
      </section>
    )
  ]
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    navData: nav
  }
};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    navData: nav
  }
};