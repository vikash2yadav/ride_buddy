import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const CheckBox = ({ checked, handleChange }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          name="acceptTerms"
          color="primary"
        />
      }
      label="I accept the terms and conditions"
    />
  );
};

export default CheckBox;
