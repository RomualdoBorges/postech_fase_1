import React from "react";
import styles from "./NewTransactionForm.module.css";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import InputSelect from "../InputSelect";
import Input from "../Input";
import Button from "../Button";
import { type SelectChangeEvent } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

// type FormValues = {
//   type: number | "";
//   value: number | "";
//   date: string | "";
// };

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

const NewTransactionForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
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

  const onSubmit = (data: FormValues) => {
    console.log("submit:", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.containerForm}>
      <p className={styles.title}>Nova Transação</p>

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
