import React, { createContext, useContext, useState } from "react";
import { getVehicleDataApi, mostlySearchedVehiclesList } from "../apis/vehicle";
import { CommonContext } from "./CommonContext";
export const VehicleContext = createContext();

export const VehicleContextProvider = ({ children }) => {
  // const {} = useContext(CommonCon);
  const [vehicleData, setVehicleData] = useState({});
  const [vehicleSpecification, setVehicleSpecification] = useState({});
  const [vehicleFeature, setVehicleFeature] = useState({});
  const [vehicleReview, setVehicleReview] = useState({});
  const [mostlySearchedVehicles, setMostlySearchedVehicles] = useState([]);
  const {setIsLoading} = useContext(CommonContext);

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

  const getVehicleList = async () => {
    let response = await mostlySearchedVehiclesList("vehicle/list", undefined, 'POST');
    if (response?.status === 200) {
      setMostlySearchedVehicles(response?.data?.data);
    }else{
      setIsLoading(true);
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
        vehicleReview,
        setVehicleReview,
        mostlySearchedVehicles,
        setMostlySearchedVehicles,
        getVehicleList,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};
