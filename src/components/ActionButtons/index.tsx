import React from "react";
import styles from "./ActionButtons.module.css";
import { IconButton, Tooltip } from "@mui/material";

export type ButtonsData = {
  id: number;
  title: string;
  icon: React.ReactNode;
};

interface ActionButtonsProps {
  data: ButtonsData[];
  onClick?: (button: ButtonsData) => void;
}

/**
 * Componente ActionButtons
 *
 * Renderiza uma lista de botões de ação (ícones) com tooltip e estilo personalizado.
 * Cada botão é configurado a partir do array `data`, que contém o título, o ícone e o id.
 *
 * Props:
 * - data: lista de botões a serem renderizados.
 * - onClick: função chamada ao clicar em um botão, recebendo o objeto `ButtonsData` correspondente.
 *
 * Exemplo de uso:
 * @example
 * <ActionButtons
 *   data={[
 *     { id: 0, title: "Editar", icon: <EditIcon /> },
 *   ]}
 *   onClick={(btn) => console.log(btn.title)}
 * />
 */
const ActionButtons: React.FC<ActionButtonsProps> = ({ data, onClick }) => {
  return (
    <div className={styles.container}>
      {data.map((btn) => (
        <Tooltip title={btn.title} key={btn.id}>
          <IconButton
            aria-label={btn.title}
            onClick={() => onClick?.(btn)}
            sx={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-white)",
              "&:hover": {
                backgroundColor: "var(--color-tertiary)",
              },
            }}
            size="small"
          >
            {btn.icon}
          </IconButton>
        </Tooltip>
      ))}
    </div>
  );
};

export default ActionButtons;
