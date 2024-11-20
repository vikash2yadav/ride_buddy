import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const TextArea = ({
  minRows,
  maxRows,
  className,
  value,
  handleChange,
  placeholder,
}) => {
  return (
    <>
      <TextareaAutosize
        minRows={minRows}
        maxRows={maxRows}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={className}
      />
    </>
  );
};

export default TextArea;
