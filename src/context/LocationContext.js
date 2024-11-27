import React, { createContext, useState } from "react";
import { allCityList } from "../apis/location";
export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [cityList, setCityList] = useState([]);

  const allCities = async () => {
    let response = await allCityList("city/imp/list", undefined, "GET");
    if (response?.status === 200) {
      setCityList(response?.data?.data);
    }
  };

  return (
    <LocationContext.Provider value={{ cityList, setCityList, allCities }}>
      {children}
    </LocationContext.Provider>
  );
};
