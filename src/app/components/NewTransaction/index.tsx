import React from "react";
import styles from "./NewTransaction.module.css";
import Image from "next/image";
import NewTransactionForm from "../NewTransactionForm";

type ImageData = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

const NewTransaction: React.FC = () => {
  const imageListTransaction: ImageData[] = [
    {
      id: 0,
      src: "/Pixels4.svg",
      alt: "Padrão decorativo topo",
      width: 180,
      height: 177,
      className: styles.topImage,
    },
    {
      id: 1,
      src: "/ilustracao2.svg",
      alt: "Padrão decorativo meio",
      width: 283,
      height: 228,
      className: styles.imagePig,
    },
    {
      id: 2,
      src: "/Pixels4.svg",
      alt: "Padrão decorativo baixo",
      width: 180,
      height: 177,
      className: styles.bottomImage,
    },
  ];

  return (
    <div className={styles.container}>
      <NewTransactionForm />

      {imageListTransaction.map((item) => (
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

export default NewTransaction;
