import React from "react";
import { CommonContextProvider } from "./CommonContext";
import { BrandContextProvider } from "./BrandContext";
import { LocationContextProvider } from "./LocationContext";
import { VehicleContextProvider } from "./VehicleContext";
import { OrderContextProvider } from "./OrderContext";

const MainContext = ({ children }) => {
  return (
    <CommonContextProvider>
      <OrderContextProvider>
        <VehicleContextProvider>
          <BrandContextProvider>
            <LocationContextProvider>{children}</LocationContextProvider>
          </BrandContextProvider>
        </VehicleContextProvider>
      </OrderContextProvider>
    </CommonContextProvider>
  );
};

export default MainContext;
