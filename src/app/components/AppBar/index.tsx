import React from "react";
import styles from "./AppBar.module.css";
import { Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";

const AppBar: React.FC = () => {
  return (
    <header className={styles.header}>
      <Box className={styles.container}>
        <Box>
          <IconButton className={styles.menu}>
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
    </header>
  );
};

export default AppBar;
