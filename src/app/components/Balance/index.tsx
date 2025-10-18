"use client";

import React from "react";
import styles from "./Balance.module.css";
import { Box, IconButton, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { getFormattedDate } from "@/app/utils/getFormattedDate";
import Image from "next/image";

const Balance: React.FC = () => {
  const [visibility, setVisibility] = React.useState<boolean>(true);

  function handleClick() {
    setVisibility(!visibility);
  }

  return (
    <div className={styles.container}>
      <Box className={styles.title}>
        <Typography>Olá, Joana! :)</Typography>
        <Typography>{getFormattedDate()}</Typography>
      </Box>

      <Box className={styles.balanceContainer}>
        <Box className={styles.visibility}>
          <Typography>Saldo</Typography>
          <IconButton size="small" onClick={handleClick}>
            {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        </Box>

        <Box className={styles.balance}>
          <Typography>Conta Corrente</Typography>
          <Typography>{`R$ ${visibility ? "2.500,00" : "***"}`}</Typography>
        </Box>
      </Box>

      <Image
        src="/Pixels2.svg"
        alt="Padrão decorativo"
        width={180}
        height={177}
        priority
        className={styles.topImage}
      />

      <Image
        src="/balance-image.svg"
        alt="Logo do ByteBank"
        width={283}
        height={228}
        priority
        className={styles.imagePig}
      />

      <Image
        src="/Pixels2.svg"
        alt="Logo do ByteBank"
        width={180}
        height={177}
        priority
        className={styles.bottomImage}
      />
    </div>
  );
};

export default Balance;
