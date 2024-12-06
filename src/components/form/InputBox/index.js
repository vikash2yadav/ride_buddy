import { TextField } from "@mui/material";
import React from "react";

const InputBox = ({ onChange, placeholder, value, type, className, variant, label }) => {
  return (
    <>
      <TextField
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
        id="outlined-basic"
        variant={variant}
        label={label}
      />
    </>
  );
};

export default InputBox;
