import { BankStatementData } from "@/components/BankStatementList";

export function getRecentTransactions(
  transactions: BankStatementData[],
  limit: number
) {
  return transactions
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
