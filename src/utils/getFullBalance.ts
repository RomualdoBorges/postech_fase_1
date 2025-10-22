import { BankStatementData } from "@/components/BankStatementList";

export function getFullBalance(transactions: BankStatementData[]): number {
  let deposit = 0;
  let transfer = 0;
  let payment = 0;

  for (const item of transactions) {
    if (item.type === 1) deposit += item.value;
    else if (item.type === 2) transfer += item.value;
    else if (item.type === 3) payment += item.value;
  }

  return deposit - transfer - payment;
}
