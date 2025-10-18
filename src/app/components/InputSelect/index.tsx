import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type Option = {
  label: string;
  value: string | number;
};

interface InputSelectProps {
  id: string;
  labelId: string;
  label: string;
  value: string | number | "";
  onChange: (event: SelectChangeEvent<string | number>) => void;
  options: Option[];
}

const InputSelect: React.FC<InputSelectProps> = ({
  id,
  labelId,
  label,
  value,
  onChange,
  options,
}) => {
  return (
    <FormControl
      fullWidth
      sx={{
        marginTop: "24px",
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#2E7D32",
        },
      }}
    >
      <InputLabel
        id={labelId}
        shrink={false}
        sx={{ display: value ? "none" : "block", color: "#444444" }}
      >
        {label}
      </InputLabel>

      <Select
        labelId={labelId}
        id={id}
        value={value}
        onChange={onChange}
        sx={{
          backgroundColor: "#FFFFFF",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#4CAF50",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#388E3C",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2E7D32",
          },
          "& .MuiSelect-icon": {
            color: "#4CAF50",
          },
          borderRadius: "8px",
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              border: "1px solid #4CAF50",
              borderRadius: "8px",
              backgroundColor: "#FFFFFF",
              "& .MuiMenuItem-root": {
                "&:hover": {
                  backgroundColor: "#E8F5E9",
                },
              },
            },
          },
        }}
      >
        {options.map((item) => (
          <MenuItem key={`${item.value}`} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default InputSelect;
