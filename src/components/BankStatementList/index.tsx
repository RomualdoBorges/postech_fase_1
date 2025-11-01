"use client";

import React from "react";
import styles from "./BankStatementList.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Modal } from "@mui/material";
import NewTransactionForm from "../NewTransactionForm";
import Button from "../Button";
import { getMonthName } from "@/utils/getMonthName";
import { useVisibility } from "@/context/VisibilityContext";
import ActionButtons, { ButtonsData } from "@/components/ActionButtons";
import { getTypeTransaction } from "@/utils/getTypeTransaction";
import { useRouter } from "next/navigation";

export type BankStatementData = {
  id: number;
  date: string;
  type: number;
  value: number;
};

interface BankStatementListProps {
  data: BankStatementData[];
  buttons?: boolean;
}

const BankStatementList: React.FC<BankStatementListProps> = ({
  data,
  buttons = false,
}) => {
  const router = useRouter();

  const { visibility, setVisibility } = useVisibility();
  const [openNew, setOpenNew] = React.useState<boolean>(false);
  const [openEdit, setOpenEdit] = React.useState<boolean>(false);
  const [openDelete, setOpenDelete] = React.useState<boolean>(false);
  const [transaction, setTransaction] =
    React.useState<BankStatementData | null>(null);

  const buttonsList: ButtonsData[] = [
    { id: 0, title: "Editar", icon: <EditIcon /> },
    { id: 1, title: "Excluir", icon: <DeleteIcon /> },
  ];

  const buttonsTitle: ButtonsData[] = [
    { id: 0, title: "Adicionar nova", icon: <AddIcon /> },
    {
      id: 1,
      title: visibility ? "Esconder saldo" : "Mostrar Saldo",
      icon: visibility ? <VisibilityIcon /> : <VisibilityOffIcon />,
    },
  ];

  async function deleteTransaction(id: number) {
    const res = await fetch("/api/transactions", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!res.ok) throw new Error("Erro ao excluir transação");
    const data = await res.json();
    setOpenDelete(!openDelete);
    router.refresh();
    console.log(data.message);
  }

  function handleClickAction(item: BankStatementData, button: ButtonsData) {
    if (button.title === "Editar") {
      setOpenEdit(true);
    } else {
      setOpenDelete(true);
    }
    setTransaction(item);
  }

  function handleClick(button: ButtonsData) {
    if (button.title === "Adicionar nova") {
      setOpenNew(!openNew);
    } else {
      setVisibility(!visibility);
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p className={styles.titleStatement}>Extrato</p>
          {buttons && (
            <ActionButtons
              data={buttonsTitle}
              onClick={(btn) => handleClick(btn)}
            />
          )}
        </div>

        <div className={styles.containerList}>
          {data.map((item) => {
            const dateEdit = new Date(item.date + 'T00:00:00').toLocaleDateString("pt-BR");
            const month = getMonthName(dateEdit);
            return (
              <div key={item.id} className={styles.card}>
                <p className={styles.month}>
                  {month.charAt(0).toUpperCase() + month.slice(1)}
                </p>
                <div className={styles.typeDate}>
                  <p>{getTypeTransaction(item.type)}</p>
                  <p>{dateEdit}</p>
                  {buttons && (
                    <ActionButtons
                      data={buttonsList}
                      onClick={(btn) => handleClickAction(item, btn)}
                    />
                  )}
                </div>
                <p className={styles.value}>{`R$ ${
                  visibility
                    ? item.value.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    : "***"
                }`}</p>
              </div>
            );
          })}
        </div>

        <Modal
          open={openNew}
          onClose={() => setOpenNew(!openNew)}
          aria-labelledby="modal-modal-new"
          aria-describedby="modal-modal-new-transaction"
        >
          <div className={styles.modal}>
            <NewTransactionForm onClose={() => setOpenNew(false)} />
          </div>
        </Modal>

        <Modal
          open={openEdit}
          onClose={() => setOpenEdit(!openEdit)}
          aria-labelledby="modal-modal-edit"
          aria-describedby="modal-modal-edit-transaction"
        >
          <div className={styles.modal}>
            <NewTransactionForm onClose={() => setOpenNew(false)}
              title="Editar Transação"
              fetchData="put"
              putData={transaction}
            />
          </div>
        </Modal>

        <Modal
          open={openDelete}
          onClose={() => setOpenDelete(!openDelete)}
          aria-labelledby="modal-modal-edit"
          aria-describedby="modal-modal-edit-transaction"
        >
          <div
            className={styles.modal}
            style={{ backgroundColor: "var(--color-white)" }}
          >
            <div className={styles.containerDelete}>
              <p className={styles.titleDelete}>
                Tem certeza que deseja excluir o(a) {transaction?.type}?
              </p>
              <p className={styles.descriptionDelete}>
                Ao confirmar você estará excluindo o(a) {transaction?.type} do dia{" "}
                {new Date(transaction?.date ?? "").toLocaleDateString("pt-BR")} no
                valor de R$ {transaction?.value}.
              </p>
              <div className={styles.buttonDelete}>
                <Button onClick={() => setOpenDelete(!openDelete)}>
                  Cancelar
                </Button>
                <Button onClick={() => deleteTransaction(transaction?.id ?? 0)}>
                  Excluir
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default BankStatementList;
