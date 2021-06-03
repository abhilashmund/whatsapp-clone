import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //Creating the data layer

export const StateProvider = (
  { reducer, initialState, children } //Higher order component and these lines allow as to set the datato the data layer
) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext); // This allows us to pull data from the data layer
