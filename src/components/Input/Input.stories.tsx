import type { Meta, StoryObj } from '@storybook/nextjs';

import Input from './index';
import React from 'react';

const meta = {
  title: 'Pages/Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputComponent: Story = {
  args: {
    id: 'value',
    value: '',
    onChange: () => {},
    type: "text",
    placeholder: 'Digite',
  },
  render: (args) => {
    const [value, setValue] = React.useState('');

    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => 
          setValue(e.target.value as string)
        }
      />
    );
  },
}

export const InputError: Story = {
  args: {
    id: 'value',
    value: '',
    onChange: () => {},
    type: "text",
    placeholder: 'Digite',
    error: true,
    helperText: "Digite um texto válido",
  },
}