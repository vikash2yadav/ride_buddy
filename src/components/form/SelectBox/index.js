import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import React from "react";

const SelectBox = ({ type, label, value, handleChange, options }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        type={type}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options.map((item) => (
          <MenuItem key={item?.value} value={item?.value}>
            {item?.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectBox;
