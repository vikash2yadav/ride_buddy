import { TextField } from "@mui/material";
import React from "react";

const InputBox = ({
  name,
  onChange,
  onBlur,
  placeholder,
  value,
  type,
  className,
  variant,
  label,
}) => {
  return (
    <>
      <TextField
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
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
