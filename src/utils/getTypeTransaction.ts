export function getTypeTransaction(typeNumber: number): string {
  switch (typeNumber) {
    case 1:
      return "Depósito";
    case 2:
      return "Transferência";
    case 3:
      return "Pagamento";
    default:
      return "Desconhecido";
  }
}
