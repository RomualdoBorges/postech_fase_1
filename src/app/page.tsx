"use client";

// import InputSelect from "./components/InputSelect";
import React from "react";
// import Input from "./components/Input";

// import Menu from "./components/Menu";
// import { nav } from "./utils/navData";
// import Balance from "./components/Balance";
// import BankStatementList, {
//   BankStatementData,
// } from "./components/BankStatementList";

export default function Home() {
  // const [type, setType] = React.useState<string | number | "">("");
  // const [name, setName] = React.useState("");
  // const bankStatementData: BankStatementData[] = [
  //   { id: 0, date: "2022-10-18", type: "Depósito", value: 150 },
  //   { id: 1, date: "2022-11-21", type: "Depósito", value: 100 },
  //   { id: 2, date: "2022-11-21", type: "Depósito", value: 50 },
  //   { id: 3, date: "2022-12-21", type: "Transferência", value: -500 },
  // ];

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      {/* <Menu orientation="vertical" navData={nav} /> */}
      {/* <Balance /> */}
      {/* <BankStatementList data={bankStatementData} /> */}

      {/* <InputSelect
        id="input-select-transf"
        labelId="input-select-transf-label"
        label="Selecione o tipo de transferência"
        value={type}
        onChange={(e) => setType(e.target.value)}
        options={[
          { label: "Depósito", value: 10 },
          { label: "Transferência", value: 20 },
          { label: "Pagamento", value: 30 },
        ]}
      />

      <Input
        id="name"
        type="number"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="00,00"
      /> */}
    </div>
  );
}
