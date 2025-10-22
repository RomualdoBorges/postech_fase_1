"use client";

import React from "react";
import styles from "./NewTransactionForm.module.css";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import InputSelect from "../InputSelect";
import Input from "../Input";
import Button from "../Button";
import { type SelectChangeEvent } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { BankStatementData } from "../BankStatementList";
import { useRouter } from "next/navigation";

interface NewTransactionFormProps {
  title?: string;
  fetchData?: "post" | "put";
  putData?: BankStatementData | null;
}
const schema = yup.object({
  type: yup
    .number()
    .oneOf([1, 2, 3], "Selecione um tipo válido")
    .required("Tipo é obrigatório"),
  value: yup
    .number()
    .typeError("Informe um número")
    .positive("Valor deve ser maior que zero")
    .required("Valor é obrigatório"),
  date: yup.string().required("Data é obrigatória"),
});

type FormValues = yup.InferType<typeof schema>;

const todayISO = new Date().toISOString().split("T")[0];

const NewTransactionForm: React.FC<NewTransactionFormProps> = ({
  title = "Nova Transação",
  fetchData = "post",
  putData,
}) => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      type: undefined,
      value: undefined,
      date: todayISO,
    },
    resolver: yupResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  React.useEffect(() => {
    if (fetchData === "put" && putData) {
      setValue("type", putData?.type);
      setValue("date", putData.date);
      setValue("value", putData.value);
    } else {
      reset();
    }
  }, [putData, setValue, fetchData, reset]);

  async function postTransaction(item: {
    type: number;
    value: number;
    date: string;
  }) {
    const res = await fetch("/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!res.ok) throw new Error("Erro ao criar transação");
    const data = await res.json();
    return data.transaction;
  }

  async function putTransaction(item: {
    id: number;
    type: number;
    value: number;
    date: string;
  }) {
    const res = await fetch("/api/transactions", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!res.ok) throw new Error("Erro ao atualziar transação");
    const data = await res.json();
    return data.transaction;
  }

  const onSubmit = (form: FormValues) => {
    if (fetchData === "post") {
      console.log("post:", form);
      postTransaction(form);
      // TODO: fazer POST aqui
    } else if (putData) {
      console.log("put:", form);
      putTransaction({ id: putData.id, ...form }); // AGORA vai com id
    }
    router.refresh();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.containerForm}>
      <p className={styles.title}>{title}</p>

      <Controller
        name="type"
        control={control}
        render={({ field }) => (
          <InputSelect
            id="input-select-transf"
            labelId="input-select-transf-label"
            label="Selecione o tipo de transferência"
            value={field.value ?? ""}
            onChange={(event: SelectChangeEvent<string | number>) => {
              const raw = event.target.value;
              const next =
                raw === "" || raw === undefined || raw === null
                  ? ""
                  : Number(raw);
              field.onChange(Number.isNaN(next) ? "" : next);
            }}
            options={[
              { label: "Depósito", value: 1 },
              { label: "Transferência", value: 2 },
              { label: "Pagamento", value: 3 },
            ]}
            error={!!errors.type}
            helperText={errors.type?.message}
          />
        )}
      />

      <p className={styles.description}>Valor</p>

      <Controller
        name="value"
        control={control}
        render={({ field }) => (
          <Input
            id="value"
            type="number"
            value={field.value ?? ""}
            onChange={(event) => {
              const raw = event.target.value;
              if (raw === "") {
                field.onChange("");
                return;
              }
              const n = Number(raw);
              field.onChange(Number.isNaN(n) ? "" : n);
            }}
            placeholder="00,00"
            error={!!errors.value}
            helperText={errors.value?.message}
          />
        )}
      />

      <p className={styles.description}>Data</p>

      <Controller
        name="date"
        control={control}
        render={({ field }) => (
          <Input
            id="date"
            type="date"
            value={typeof field.value === "string" ? field.value : ""}
            onChange={(e) => field.onChange(e.target.value)}
            placeholder="YYYY-MM-DD"
            error={!!errors.date}
            helperText={errors.date?.message}
          />
        )}
      />

      <Button style={{ width: "280px", marginTop: "32px" }} type="submit">
        concluir transação
      </Button>
    </form>
  );
};

export default NewTransactionForm;
