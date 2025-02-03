import React from "react";
import { Snackbar, Alert } from "@mui/material";

function SnackBar({ open, message, setSnackOpen, type, onClose, variant }) {
  const severityMap = {
    success: "success",
    error: "error",
    warning: "warning",
    info: "info",
  };

  const severity = severityMap[type] || "info";

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        onClose={onClose}
        severity={severity}
        variant={variant}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SnackBar;
