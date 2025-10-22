import React from "react";
import styles from "./bank-statement.module.css";
import Menu from "../../components/Menu";
import BankStatementList, {
  BankStatementData,
} from "../../components/BankStatementList";
import { nav } from "@/utils/navData";

export default function BankStatement() {
  const bankStatementData: BankStatementData[] = [
    { id: 0, date: "2022-10-18", type: "Depósito", value: 150 },
    { id: 1, date: "2022-11-21", type: "Depósito", value: 100 },
    { id: 2, date: "2022-11-21", type: "Depósito", value: 50 },
    { id: 3, date: "2022-12-21", type: "Transferência", value: -500 },
    { id: 4, date: "2022-12-21", type: "Transferência", value: -500 },
    { id: 5, date: "2022-12-21", type: "Transferência", value: -500 },
    { id: 6, date: "2022-12-21", type: "Transferência", value: -500 },
    { id: 7, date: "2022-12-21", type: "Transferência", value: -500 },
    { id: 8, date: "2022-12-21", type: "Transferência", value: -500 },
    { id: 9, date: "2022-12-21", type: "Transferência", value: -500 },
    { id: 10, date: "2022-12-21", type: "Transferência", value: -500 },
    { id: 11, date: "2022-12-21", type: "Transferência", value: -500 },
    { id: 12, date: "2022-12-21", type: "Transferência", value: -500 },
    { id: 13, date: "2022-12-21", type: "Transferência", value: -500 },
    { id: 14, date: "2022-12-21", type: "Transferência", value: -500 },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.menu}>
        <Menu navData={nav} />
      </section>

      <section className={styles.statement}>
        <BankStatementList data={bankStatementData} buttons={true} />
      </section>
    </div>
  );
}
