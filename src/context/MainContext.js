import React from "react";
import { CommonContextProvider } from "./CommonContext";

const MainContext = ({ children }) => {
  return (
    <CommonContextProvider>
      {children}
    </CommonContextProvider>
  );
};

export default MainContext;
