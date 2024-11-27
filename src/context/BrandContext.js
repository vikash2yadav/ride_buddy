import React, { createContext, useState } from "react";
import { allBrandList } from "../apis/common";
export const BrandContext = createContext();

export const BrandContextProvider = ({ children }) => {
  const [brandList, setBrandList] = useState([]);

  const allBrands = async () => {
    let response = await allBrandList("brand/list", undefined, 'POST');
    if (response?.status === 200) {
      setBrandList(response?.data?.data);
    }
  };

  return (
    <BrandContext.Provider value={{ brandList, setBrandList, allBrands }}>
      {children}
    </BrandContext.Provider>
  );
};
