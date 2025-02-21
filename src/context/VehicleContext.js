import React, { createContext, useState } from "react";
import { getVehicleDataApi, mostlySearchedVehiclesList } from "../apis/vehicle";
export const VehicleContext = createContext();

export const VehicleContextProvider = ({ children }) => {
  const [isVehicleLoading, setIsVehicleLoading] = useState(false);
  const [vehicleData, setVehicleData] = useState({});
  const [vehicleSpecification, setVehicleSpecification] = useState({});
  const [vehicleFeature, setVehicleFeature] = useState({});
  const [vehicleReview, setVehicleReview] = useState({});
  const [mostlySearchedVehicles, setMostlySearchedVehicles] = useState([]);

  const getVehicleDetail = async (id) => {
    console.log(id);
    
    let response = await getVehicleDataApi(
      `vehicle/get/${id}`,
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

  const getVehicleList = async (values) => {
    setIsVehicleLoading(true)
    let response = await mostlySearchedVehiclesList("vehicle/list", values, 'POST');
    if (response?.status === 200) {
      setMostlySearchedVehicles(response?.data?.data);
      setIsVehicleLoading(false);
    }else{
      setIsVehicleLoading(true);
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
        isVehicleLoading, 
        setIsVehicleLoading
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};
