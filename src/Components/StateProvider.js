//setup datalayer
import React, { createContext, useContext, useReducer } from "react";

//this is a data layer
export const StateContext = createContext();

//Build A provider
export const StateProvider = ({reducer,initialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);
 
 //this is use for insidce component!
export const  useStateValue = () => useContext(StateContext)



