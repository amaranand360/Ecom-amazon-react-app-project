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



// //Prepares the datalayer
// export const StateContext = createContext();

// //wrap our app and provide the Data layer
// export const StateProvider = ({ reducer, initialState, children }) => (
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// );

// //Pull information from the data layer
// export const useStateValue = () => useContext(StateContext);


