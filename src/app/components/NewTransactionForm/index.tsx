import React from "react";
import { Controller, useForm } from "react-hook-form";
import InputSelect from "../InputSelect";
import Input from "../Input";
import { Button, Typography, type SelectChangeEvent } from "@mui/material";

type FormValues = {
  type: number | "";
  value: number | "";
  date: string | "";
};

const NewTransactionForm: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      type: "",
      value: "",
      date: new Date().toISOString().split("T")[0],
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("submit:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "grid",
      }}
    >
      <Typography
        sx={{
          fontSize: "25px",
          fontWeight: 700,
          color: "#dee9ea",
          marginBottom: "35px",
        }}
      >
        Nova Transação
      </Typography>

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
          />
        )}
      />

      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 600,
          color: "#dee9ea",
          margin: "32px 0 16px 0",
        }}
      >
        Valor
      </Typography>

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
          />
        )}
      />

      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 600,
          color: "#dee9ea",
          margin: "32px 0 16px 0",
        }}
      >
        Data
      </Typography>

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
          />
        )}
      />

      <Button
        type="submit"
        sx={{
          padding: "16px 39px",
          width: "250px",
          backgroundColor: "var(--color-primary)",
          color: "white",
          borderRadius: "8px",
          textTransform: "capitalize",
          marginTop: "32px",
          "&:hover": {
            backgroundColor: "var(--color-tertiary)",
          },
        }}
      >
        Concluir transação
      </Button>
    </form>
  );
};

export default NewTransactionForm;
