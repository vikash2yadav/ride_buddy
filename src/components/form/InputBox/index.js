import { TextField } from "@mui/material";
import React from "react";

const InputBox = ({ variant, label }) => {
  return (
    <>
      <TextField id="outlined-basic" variant={variant} label={label} />
    </>
  );
};

export default InputBox;
