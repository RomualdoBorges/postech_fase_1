import React from "react";
import styles from "@/styles/page.module.css";
import Menu from "../components/Menu";
import { nav } from "@/utils/navData";
import BankStatementList from "../components/BankStatementList";
import Balance from "@/components/Balance";
import NewTransaction from "@/components/NewTransaction";
import { getRecentTransactions } from "@/utils/getRecentTransactions";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/transactions", {
    cache: "no-store",
  });
  const { user, transaction } = await res.json();
  const recentTransaction = getRecentTransactions(transaction, 4);

  return (
    <div className={styles.container}>
      <section className={styles.menu}>
        <Menu navData={nav} />
      </section>

      <section className={styles.cardsCenter}>
        <Balance nickname={user[0].nickname} balance={user[0].balance} />
        <NewTransaction />
      </section>

      <section className={styles.statement}>
        <BankStatementList data={recentTransaction} />
      </section>
    </div>
  );
}
