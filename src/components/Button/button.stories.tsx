import type { Meta, StoryObj } from '@storybook/nextjs';

import Button from './index';

const meta = {
  title: 'Pages/Components/Botão',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Botão: Story = {
  args: {
    children: 'Botão',

  }
};

export const BotãoComProps: Story = {
  args: {
    children: 'Veja o Código ao Lado',
  },
  render: (args) => {
    return (
      <Button
        {...args}
        style={{ backgroundColor: 'green'}}
      />
    );
  },
};