import React, { createContext, useState } from "react";
export const CommonContext = createContext();

export const CommonContextProvider = ({ children }) => {
  const [modelOpen, setModelOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [messageType, setMessageType] = useState(null);
  const [message, setMessage] = useState(null);

  return (
    <CommonContext.Provider
      value={{
        modelOpen,
        setModelOpen,
        isLoading,
        setIsLoading,
        snackOpen,
        setSnackOpen,
        message,
        setMessage,
        messageType,
        setMessageType,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};
