import React from "react";
import { CommonContextProvider } from "./CommonContext";
import { BrandContextProvider } from "./BrandContext";
import { LocationContextProvider } from "./LocationContext";
import { VehicleContextProvider } from "./VehicleContext";

const MainContext = ({ children }) => {
  return (
    <CommonContextProvider>
        <VehicleContextProvider>
      <BrandContextProvider>
          <LocationContextProvider>{children}</LocationContextProvider>
      </BrandContextProvider>
        </VehicleContextProvider>
    </CommonContextProvider>
  );
};

export default MainContext;
