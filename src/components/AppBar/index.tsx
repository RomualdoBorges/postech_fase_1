"use client";

import React from "react";
import styles from "./AppBar.module.css";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import { nav } from "@/utils/navData";
import Menu from "../Menu";

interface AppBarProps {
  name: string;
}

const AppBar: React.FC<AppBarProps> = ({ name }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <IconButton className={styles.menu} onClick={handleClick}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </div>

        <div className={styles.user}>
          <p>{name}</p>
          <IconButton>
            <AccountCircle fontSize="large" />
          </IconButton>
        </div>
      </div>

      {open && (
        <div className={styles.nav}>
          <IconButton onClick={handleClick}>
            <CloseIcon />
          </IconButton>
          <Menu orientation="vertical" navData={nav} />
        </div>
      )}
    </header>
  );
};

export default AppBar;
