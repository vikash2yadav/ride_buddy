import React, { createContext, useState } from 'react';

export const CommonContext = createContext();

export const CommonContextProvider = ({ children }) => {
  const [modelOpen, setModelOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <CommonContext.Provider value={{ modelOpen, setModelOpen, isLoading, setIsLoading }}>
      {children}
    </CommonContext.Provider>
  );
};

