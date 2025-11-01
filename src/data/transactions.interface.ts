export type ApiData = {
  user: User[],
  transaction: Transaction[]
};

export type User = {
  id: number,
  name: string,
  nickname: string,
  balance: number
}

export type Transaction = { 
  id: number,
  date: string,
  type: number,
  value: number
}
