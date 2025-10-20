"use client";

import React from "react";
import styles from "./Balance.module.css";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { getFormattedDate } from "@/app/utils/getFormattedDate";
import Image from "next/image";

type ImageData = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

const Balance: React.FC = () => {
  const [visibility, setVisibility] = React.useState<boolean>(true);

  const imageListBalance: ImageData[] = [
    {
      id: 0,
      src: "/Pixels2.svg",
      alt: "Padrão decorativo topo",
      width: 180,
      height: 177,
      className: styles.topImage,
    },
    {
      id: 1,
      src: "/balance-image.svg",
      alt: "Padrão decorativo Porquinho",
      width: 283,
      height: 228,
      className: styles.imagePig,
    },
    {
      id: 2,
      src: "/Pixels2.svg",
      alt: "Padrão decorativo baixo",
      width: 180,
      height: 177,
      className: styles.bottomImage,
    },
  ];

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

      {imageListBalance.map((item) => (
        <Image
          key={item.id}
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          priority
          className={item.className}
        />
      ))}
    </div>
  );
};

export default Balance;
