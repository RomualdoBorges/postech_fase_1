import React from "react";
import styles from "./BankStatementList.module.css";
import { getMonthName } from "@/app/utils/getMonthName";

export type BankStatementData = {
  id: number;
  date: string;
  type: string;
  value: number;
};

interface BankStatementListProps {
  data: BankStatementData[];
}

const BankStatementList: React.FC<BankStatementListProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((item) => {
        const dateEdit = new Date(item.date).toLocaleDateString("pt-BR");
        const month = getMonthName(dateEdit);
        return (
          <div key={item.id} className={styles.card}>
            <p className={styles.month}>
              {month.charAt(0).toUpperCase() + month.slice(1)}
            </p>
            <div className={styles.typeDate}>
              <p>{item.type}</p>
              <p>{dateEdit}</p>
            </div>
            <p className={styles.value}>{`R$ ${item.value}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BankStatementList;
