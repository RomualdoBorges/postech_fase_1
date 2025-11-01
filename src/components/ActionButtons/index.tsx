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
