import type { Meta, StoryObj } from '@storybook/nextjs';

import InputSelect from './index';
import React from 'react';

const meta = {
  title: 'Pages/Components/Input Select',
  component: InputSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    id: "input-select-transf",
    labelId: "input-select-transf-label",
    label: "Selecione o tipo de transferência",
    value: "",
    onChange: () => {},
    options:[
      { label: "Depósito", value: 1 },
      { label: "Transferência", value: 2 },
      { label: "Pagamento", value: 3 },
    ],
  },
  render: (args) => {
    const [value, setValue] = React.useState(0);

    return (
      <InputSelect
        {...args}
        value={value}
        onChange={(e) => 
          setValue(e.target.value as number)
        }
      />
    );
  },
}

export const InputError: Story = {
  args: {
    id: "input-select-transf",
    labelId: "input-select-transf-label",
    label: "Selecione o tipo de transferência",
    value: "",
    onChange: () => {},
    options:[
      { label: "Nenhum", value: 0 },
    ],
    error: true,
    helperText: 'teste'
  },
}