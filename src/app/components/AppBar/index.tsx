"use client";

import React from "react";
import styles from "./AppBar.module.css";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "../Menu";
import CloseIcon from "@mui/icons-material/Close";
import { nav } from "@/utils/navData";

const AppBar: React.FC = () => {
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
          <p>Joana da Silva Oliveira</p>
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
