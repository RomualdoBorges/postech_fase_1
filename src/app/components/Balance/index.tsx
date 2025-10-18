"use client";

import React from "react";
import styles from "./Balance.module.css";
import { IconButton } from "@mui/material";
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
      <div className={styles.title}>
        <p>Olá, Joana! :)</p>
        <p>{getFormattedDate()}</p>
      </div>

      <div className={styles.balanceContainer}>
        <div className={styles.visibility}>
          <p>Saldo</p>
          <IconButton size="small" onClick={handleClick}>
            {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        </div>

        <div className={styles.balance}>
          <p>Conta Corrente</p>
          <p>{`R$ ${visibility ? "2.500,00" : "***"}`}</p>
        </div>
      </div>

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
