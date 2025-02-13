import { Avatar } from "@mui/material";
import React from "react";

const AvatarImage = ({ name, sx, src }) => {
  return (
    <>
      <Avatar name={name} sx={sx} src={src} />
    </>
  );
};

export default AvatarImage;
