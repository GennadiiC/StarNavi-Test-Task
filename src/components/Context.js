import React, { useState } from "react";

export const AppContext = React.createContext();

export const Provider = ({ children }) => {
  
  const [ xy, setXy ] = useState();
  const [ xyArr, setXyArr ] = useState([]);

  return (
    <AppContext.Provider value={{ xy, setXy, xyArr, setXyArr }}>
      {children}
    </AppContext.Provider>
  );
}