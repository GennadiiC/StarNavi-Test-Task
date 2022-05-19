import React, { useState } from "react";

export const AppContext = React.createContext();

export const Provider = ({ children }) => {
  
  const [ xy, setXy ] = useState();
  const [ xyArr, setXyArr ] = useState([]);

  const arrHandler = () => {
    setXyArr(prevXyarr => {
      return [
        ...prevXyarr,
        xy
      ]
    })
    if (xyArr.length === 10) {
      setXyArr(prevXyarr => {
        return prevXyarr.slice(1)
      })
    } else if (xy === '') {
      setXyArr([]);
    }
    return xyArr;
  }

  const resetXy = () => {
    setXy('')
  }

  const resetXyArr = () => {
    setXyArr([])
  }

  const handleAddXY = (square) => {
    setXy(square)
  }

  return (
    <AppContext.Provider value={{ xy, xyArr, arrHandler, resetXyArr, resetXy, handleAddXY }}>
      {children}
    </AppContext.Provider>
  );
}