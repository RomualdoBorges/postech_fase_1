import React from "react";
import styles from "./styles/page.module.css";
import NewTransaction from "./components/NewTransaction";
import Menu from "./components/Menu";
import { nav } from "@/utils/navData";
import Balance from "./components/Balance";
import BankStatementList, {
  BankStatementData,
} from "./components/BankStatementList";

export default function Home() {
  const bankStatementData: BankStatementData[] = [
    { id: 0, date: "2022-10-18", type: "Depósito", value: 150 },
    { id: 1, date: "2022-11-21", type: "Depósito", value: 100 },
    { id: 2, date: "2022-11-21", type: "Depósito", value: 50 },
    { id: 3, date: "2022-12-21", type: "Transferência", value: -500 },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.menu}>
        <Menu navData={nav} />
      </section>

      <section className={styles.cardsCenter}>
        <Balance />
        <NewTransaction />
      </section>

      <section className={styles.statement}>
        <BankStatementList data={bankStatementData} />
      </section>
    </div>
  );
}
