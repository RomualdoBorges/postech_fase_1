"use client";

import React from "react";
import { TextField } from "@mui/material";

interface InputProps {
  id: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  value,
  onChange,
  type = "text",
  placeholder,
}) => {
  return (
    <TextField
      id={id}
      variant="outlined"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      sx={{
        width: "280px",
        zIndex: 1000,
        backgroundColor: "#FFFFFF",
        borderRadius: "8px",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#4CAF50",
            borderRadius: "8px",
          },
          "&:hover fieldset": {
            borderColor: "#388E3C",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#2E7D32",
          },
        },
        "& .MuiInputLabel-root": {
          color: "#444444",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#2E7D32",
        },
        "& .MuiInputBase-input::placeholder": {
          color: "#444444",
          opacity: 1,
        },
        "& input[type='date']::-webkit-calendar-picker-indicator": {
          filter:
            "invert(53%) sepia(12%) saturate(2683%) hue-rotate(83deg) brightness(92%) contrast(89%)",
          opacity: 1,
        },
      }}
    />
  );
};

export default Input;
