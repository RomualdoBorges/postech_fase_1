export type ApiData = {
  user: User[],
  transaction: Transaction[]
};

export type User = {
  id: 0,
  name: "Joana da Silva Oliveira",
  nickname: "Joana",
  balance: 3472.75
}

export type Transaction = { 
  id: 0,
  date: "2025-01-03",
  type: 1,
  value: 961.0
}
