import React, { createContext, useReducer } from "react";

//import the Reducer

import AppReducer from "./AppReducer";
//create initial state

const intialstate = {
  transactions: [
    {
      id: 1,
      description: "income 1",
      transactionAmount: 1000,
    },
    {
      id: 2,
      description: "Expense 1",
      transactionAmount: -100,
    },
    {
      id: 3,
      description: "income 2",
      transactionAmount: 2000,
    },
    {
      id: 4,
      description: "Expense 2",
      transactionAmount: -500,
    },
  ],
};
//create the Global Context
export const GlobalContext = createContext(intialstate);

// Create a provider for Global Context

export const GlobalProvider = ({ children }) => {
  const [state] = useReducer(AppReducer, intialstate);
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
