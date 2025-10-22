import { NextResponse } from "next/server";
import data from "@/data/transactions.json";

let transactions = [...data.transaction];

export function GET() {
  return NextResponse.json({
    user: data.user,
    transaction: transactions,
  });
}

export async function POST(req: Request) {
  const newTransaction = await req.json();

  const newId = transactions.length
    ? transactions[transactions.length - 1].id + 1
    : 0;

  const transaction = { id: newId, ...newTransaction };
  transactions.push(transaction);

  return NextResponse.json({
    message: "Transação criada com sucesso",
    transaction,
  });
}

export async function PUT(req: Request) {
  const updated = await req.json();
  const index = transactions.findIndex((t) => t.id === updated.id);

  if (index === -1) {
    return NextResponse.json(
      { message: "Transação não encontrada" },
      { status: 404 }
    );
  }

  transactions[index] = { ...transactions[index], ...updated };

  return NextResponse.json({
    message: `Transação ${updated.id} atualizada com sucesso`,
    transaction: transactions[index],
  });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  transactions = transactions.filter((t) => t.id !== id);

  return NextResponse.json({
    message: `Transação ${id} removida com sucesso`,
  });
}
