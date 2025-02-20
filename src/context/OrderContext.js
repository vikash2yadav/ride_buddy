import React, { createContext, useState } from "react";
import { allOrderList } from "../apis/orders";
export const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
  const [ordersList, setOrdersList] = useState([]);
  const [orderOptions, setOrderOptions] = useState([]);

  const allOrders = async (values) => {
    let response = await allOrderList("order/list", values, "POST");
    if (response?.status === 200) {
      setOrdersList(response?.data?.data);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        ordersList,
        setOrdersList,
        allOrders,
        orderOptions,
        setOrderOptions,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
