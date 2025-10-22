import React from "react";
import styles from "./bank-statement.module.css";
import Menu from "../../components/Menu";
import BankStatementList from "../../components/BankStatementList";
import { nav } from "@/utils/navData";
import { getRecentTransactions } from "@/utils/getRecentTransactions";

export default async function BankStatement() {
  const res = await fetch("http://localhost:3000/api/transactions", {
    cache: "no-store",
  });
  const { transaction } = await res.json();
  const recentTransaction = getRecentTransactions(transaction, 100);

  return (
    <div className={styles.container}>
      <section className={styles.menu}>
        <Menu navData={nav} />
      </section>

      <section className={styles.statement}>
        <BankStatementList data={recentTransaction} buttons={true} />
      </section>
    </div>
  );
}
