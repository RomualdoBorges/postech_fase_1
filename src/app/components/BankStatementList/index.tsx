"use client";

import React from "react";
import styles from "./BankStatementList.module.css";
import { getMonthName } from "@/app/utils/getMonthName";
import ActionButtons, { ButtonsData } from "../ActionButtons";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
} from "@mui/material";
import NewTransactionForm from "../NewTransactionForm";
import Button from "../Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "var(--background-secondary)",
  boxShadow: 24,
  p: 4,
};

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
        <Box sx={style}>
          <NewTransactionForm />
        </Box>
      </Modal>

      <Modal
        open={openEdit}
        onClose={() => setOpenEdit(!openEdit)}
        aria-labelledby="modal-modal-edit"
        aria-describedby="modal-modal-edit-transaction"
      >
        <Box sx={style}>
          <NewTransactionForm title="Editar Transação" />
        </Box>
      </Modal>

      <Dialog
        open={openDelete}
        keepMounted
        onClose={() => setOpenDelete(!openDelete)}
        aria-describedby="alert-dialog-delete-transaction"
      >
        <DialogTitle>
          {`Tem certeza que deseja excluir o(a) ${transaction?.type}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-delete-transaction">
            Ao confirmar você estará excluindo o(a) {transaction?.type} do dia{" "}
            {new Date(transaction?.date ?? "").toLocaleDateString("pt-BR")} no
            valor de R$ {transaction?.value}.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDelete(!openDelete)}>Cancelar</Button>
          <Button onClick={() => setOpenDelete(!openDelete)}>Excluir</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BankStatementList;
