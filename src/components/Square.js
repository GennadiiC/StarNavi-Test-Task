
import { useContext } from "react";
import { AppContext } from "./Context";

export default function Square ({ row, column }) {

  const { setXy } = useContext(AppContext);

  const handleAddXY = (square) => {
    setXy(square)
  }

  return ( 
    <div onMouseEnter={() => handleAddXY(`Row ${row}, Column ${column}`)} className="square">    
    </div>  
  );
}

