import { getByDisplayValue } from "@testing-library/react";
import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "UPDATE_TOTALS" });
  }, [state.cart]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const res = await fetch(url);
    const data = await res.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: data });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const increaseItem = (id) => {
    dispatch({ type: "INCREASE_ITEM", payload: id });
  };
  const decreaseItem = (id) => {
    dispatch({ type: "DECREASE_ITEM", payload: id });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
