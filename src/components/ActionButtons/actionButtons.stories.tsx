import type { Meta, StoryObj } from '@storybook/nextjs';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import ActionButtons, { ButtonsData } from './index';

const meta = {
  title: 'Pages/Components/Action Buttons',
  component: ActionButtons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ActionButtons>;

export default meta;

type Story = StoryObj<typeof meta>;

const buttonsList: ButtonsData[] = [
    { id: 0, title: "Editar", icon: <EditIcon /> },
    { id: 1, title: "Excluir", icon: <DeleteIcon /> },
];

export const BotãoComProps: Story = {
  args: {
    data: buttonsList,
    onClick: () => {}
  },
};