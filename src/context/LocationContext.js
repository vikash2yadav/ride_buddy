import React, { createContext, useContext, useState } from "react";
import { allCityList, allStateList } from "../apis/location";
import { CommonContext } from "./CommonContext";
export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [cityList, setCityList] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [isImp, setIsImp] = useState(true);
  const { setIsLoading } = useContext(CommonContext);

  const allCities = async () => {
    let response = await allCityList("city/imp/list", "POST");
    if (response?.status === 200) {
      setCityList(response?.data?.data);
    } else {
      setIsLoading(true);
    }
  };

  const citiesList = async () => {
    let response = await allCityList("city/list", {}, "POST");
    if (response?.status === 200) {
      const formattedStates = response?.data?.data.map((city) => ({
        title: city.name,
        value: city.id,
      }));

      setCities(formattedStates);
    } else {
      setIsLoading(true);
    }
  };

  const statesList = async () => {
    let response = await allStateList("state/list", {}, "POST");
    if (response?.status === 200) {
      const formattedStates = response?.data?.data.map((state) => ({
        title: state.name,
        value: state.id,
      }));

      setStates(formattedStates);
    } else {
      setIsLoading(true);
    }
  };

  return (
    <LocationContext.Provider
      value={{
        cityList,
        setCityList,
        allCities,
        isImp,
        setIsImp,
        cities,
        setCities,
        states,
        setStates,
        citiesList,
        statesList,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
