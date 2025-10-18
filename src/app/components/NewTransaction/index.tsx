"use client";

import React from "react";
import styles from "./NewTransaction.module.css";
import Image from "next/image";
import NewTransactionForm from "../NewTransactionForm";

const NewTransaction: React.FC = () => {
  return (
    <div className={styles.container}>
      <NewTransactionForm />

      <Image
        src="/Pixels4.svg"
        alt="Padrão decorativo topo"
        width={180}
        height={177}
        priority
        className={styles.topImage}
      />

      <Image
        src="/ilustracao2.svg"
        alt="Padrão decorativo meio"
        width={283}
        height={228}
        priority
        className={styles.imagePig}
      />

      <Image
        src="/Pixels4.svg"
        alt="Padrão decorativo baixo"
        width={180}
        height={177}
        priority
        className={styles.bottomImage}
      />
    </div>
  );
};

export default NewTransaction;
