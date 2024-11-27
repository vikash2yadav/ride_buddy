import React from "react";
import { CommonContextProvider } from "./CommonContext";
import { BrandContextProvider } from "./BrandContext";
import { LocationContextProvider } from "./LocationContext";

const MainContext = ({ children }) => {
  return (
    <CommonContextProvider>
      <BrandContextProvider>
        <LocationContextProvider>{children}</LocationContextProvider>
      </BrandContextProvider>
    </CommonContextProvider>
  );
};

export default MainContext;
