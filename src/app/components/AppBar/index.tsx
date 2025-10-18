"use client";

import React from "react";
import styles from "./AppBar.module.css";
import { Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "../Menu";
import { nav } from "@/app/utils/navData";
import CloseIcon from "@mui/icons-material/Close";

const AppBar: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <header className={styles.header}>
      <Box className={styles.container}>
        <Box>
          <IconButton className={styles.menu} onClick={handleClick}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </Box>

        <Box className={styles.user}>
          <Typography>Joana da Silva Oliveira</Typography>
          <IconButton>
            <AccountCircle fontSize="large" />
          </IconButton>
        </Box>
      </Box>

      {open && (
        <Box className={styles.nav}>
          <IconButton onClick={handleClick}>
            <CloseIcon />
          </IconButton>
          <Menu orientation="vertical" navData={nav} />
        </Box>
      )}
    </header>
  );
};

export default AppBar;
