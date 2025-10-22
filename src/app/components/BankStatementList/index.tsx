"use client";

import React from "react";
import styles from "./BankStatementList.module.css";
import { getMonthName } from "@/app/utils/getMonthName";
import ActionButtons, { ButtonsData } from "../ActionButtons";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Modal } from "@mui/material";
import NewTransactionForm from "../NewTransactionForm";
import Button from "../Button";

export type BankStatementData = {
  id: number;
  date: string;
  type: string;
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
  ];

  function handleClickAction(item: BankStatementData, button: ButtonsData) {
    if (button.title === "Editar") {
      setOpenEdit(true);
      console.log("Editar", item);
    } else {
      setOpenDelete(true);
      console.log("Excluir", item);
    }
    setTransaction(item);
  }

  return (
    <>
      <div className={styles.titleContainer}>
        <p className={styles.titleStatement}>Extrato</p>
        {buttons && (
          <ActionButtons
            data={buttonsTitle}
            onClick={() => setOpenNew(!openNew)}
          />
        )}
      </div>

      <div className={styles.containerList}>
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
                {buttons && (
                  <ActionButtons
                    data={buttonsList}
                    onClick={(btn) => handleClickAction(item, btn)}
                  />
                )}
              </div>
              <p className={styles.value}>{`R$ ${item.value}`}</p>
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
          <NewTransactionForm />
        </div>
      </Modal>

      <Modal
        open={openEdit}
        onClose={() => setOpenEdit(!openEdit)}
        aria-labelledby="modal-modal-edit"
        aria-describedby="modal-modal-edit-transaction"
      >
        <div className={styles.modal}>
          <NewTransactionForm title="Editar Transação" />
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
              <Button onClick={() => setOpenDelete(!openDelete)}>
                Excluir
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BankStatementList;
