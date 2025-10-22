import React from "react";
import styles from "@/styles/page.module.css";
import Menu from "../components/Menu";
import { nav } from "@/utils/navData";
import BankStatementList, {
  BankStatementData,
} from "../components/BankStatementList";
import Balance from "@/components/Balance";
import NewTransaction from "@/components/NewTransaction";

export default function Home() {
  const bankStatementData: BankStatementData[] = [
    { id: 0, date: "2022-10-18", type: 1, value: 150 },
    { id: 1, date: "2022-11-21", type: 1, value: 100 },
    { id: 2, date: "2022-11-21", type: 1, value: 50 },
    { id: 3, date: "2022-12-21", type: 2, value: 500 },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.menu}>
        <Menu navData={nav} />
      </section>

      <section className={styles.cardsCenter}>
        <Balance nickname="Joana" balance={2500} />
        <NewTransaction />
      </section>

      <section className={styles.statement}>
        <BankStatementList data={bankStatementData} />
      </section>
    </div>
  );
}
