import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import dayjs from "dayjs";

export default function BasicDatePicker({
  className,
  value,
  name,
  onChange,
  onBlur,
  dateFormat = "YYYY-MM-DD",
  label
}) {
  const formattedValue = value && dayjs(value).isValid() ? dayjs(value) : null;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label={label}
          className={className}
          name={name}
          value={formattedValue}
          onChange={(newValue) => onChange(newValue)}
          onBlur={onBlur}
          renderInput={(params) => (
            <TextField
              {...params}
              value={formattedValue ? formattedValue.format(dateFormat) : ""}
            />
          )}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
