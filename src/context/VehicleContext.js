import React, { createContext, useState } from "react";
import { getVehicleDataApi } from "../apis/vehicle";
export const VehicleContext = createContext();

export const VehicleContextProvider = ({ children }) => {
  const [vehicleData, setVehicleData] = useState({});
  const [vehicleSpecification, setVehicleSpecification] = useState({});
  const [vehicleFeature, setVehicleFeature] = useState({});
  const [vehicleReview, setVehicleReview] = useState({});

  const getVehicleDetail = async (id) => {
    let response = await getVehicleDataApi(
      `vehicle/get/${1}`,
      undefined,
      "GET"
    );
    if (response?.status === 200) {
      setVehicleData(response?.data?.data);
      setVehicleSpecification(response?.data?.data?.specifications);
      setVehicleFeature(response?.data?.data?.features);
      setVehicleReview(response?.data?.data?.reviews);
    }
  };

  return (
    <VehicleContext.Provider
      value={{
        vehicleData,
        setVehicleData,
        getVehicleDetail,
        vehicleSpecification,
        setVehicleSpecification,
        vehicleFeature,
        setVehicleFeature,
        vehicleReview, setVehicleReview
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};
