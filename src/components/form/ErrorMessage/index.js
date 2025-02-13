import React from "react";

const ErrorMessage = ({ message, large }) => {
  return <span className={`text-red-700 text-${large ? 'sm' : 'xs'} font-small`}>{message}</span>;
};

export default ErrorMessage;
