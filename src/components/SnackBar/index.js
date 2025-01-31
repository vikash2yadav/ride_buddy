import React from "react";
import { Snackbar, Alert } from "@mui/material";

function SnackBar({ open, message, type, onClose }) {
  const severityMap = {
    success: 'success',
    error: 'error',
    warning: 'warning',
    info: 'info',
  };

  const severity = severityMap[type] || 'info';

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SnackBar;
