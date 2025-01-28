import React, { createContext, useContext, useState } from "react";
import { allCityList } from "../apis/location";
import { CommonContext } from "./CommonContext";
export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [cityList, setCityList] = useState([]);
  const [isImp, setIsImp] = useState(true);
  const { setIsLoading } = useContext(CommonContext);

  const allCities = async () => {
    let response = await allCityList(
      "city/list",
      { filters: { imp: `${isImp ? 1 : null}` } },
      "POST"
    );
    if (response?.status === 200) {
      setCityList(response?.data?.data);
    } else {
      setIsLoading(true);
    }
  };

  return (
    <LocationContext.Provider
      value={{ cityList, setCityList, allCities, isImp, setIsImp }}
    >
      {children}
    </LocationContext.Provider>
  );
};
