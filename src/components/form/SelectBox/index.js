import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import React from "react";

const SelectBox = ({ className, name, type, label, value, onChange, onBlur, options }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        type={type}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
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
