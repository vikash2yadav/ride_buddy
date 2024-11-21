import React, { createContext, useState } from 'react';

export const CommonContext = createContext();

export const CommonContextProvider = ({ children }) => {
  const [modelOpen, setModelOpen] = useState(false);

  return (
    <CommonContext.Provider value={{ modelOpen, setModelOpen }}>
      {children}
    </CommonContext.Provider>
  );
};

