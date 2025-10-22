"use client";

import React from "react";
import styles from "./Balance.module.css";
import { IconButton, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Image from "next/image";
import { getFormattedDate } from "@/utils/getFormattedDate";
import { useVisibility } from "@/context/VisibilityContext";

type ImageData = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

interface BalanceProps {
  nickname: string;
  balance: number;
}

const Balance: React.FC<BalanceProps> = ({ nickname, balance }) => {
  const { visibility, setVisibility } = useVisibility();

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
        <p>Olá, {nickname}! :)</p>
        <p>{getFormattedDate()}</p>
      </div>

      <div className={styles.balanceContainer}>
        <div className={styles.visibility}>
          <p>Saldo</p>
          <Tooltip
            title={visibility ? "Esconder saldo" : "Mostrar Saldo"}
            placement="right"
          >
            <IconButton size="small" onClick={handleClick}>
              {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </Tooltip>
        </div>

        <div className={styles.balance}>
          <p>Conta Corrente</p>
          <p>{`R$ ${
            visibility
              ? balance.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : "***"
          }`}</p>
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
