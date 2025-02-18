import { Avatar } from "@mui/material";
import React from "react";

const AvatarImage = ({
  name,
  value,
  onChange,
  onBlur,
  variant,
  sx,
  src,
  onClick,
}) => {
  return (
    <>
      <Avatar
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        sx={sx}
        variant={variant}
        src={src}
        onClick={onClick}
      />
    </>
  );
};

export default AvatarImage;
