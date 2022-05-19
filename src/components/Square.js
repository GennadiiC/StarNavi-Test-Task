
import { useContext } from "react";
import { AppContext } from "./Context";

export default function Square ({ row, column }) {

  const { handleAddXY } = useContext(AppContext);

  return ( 
    <div onMouseEnter={() => handleAddXY(`Row ${row}, Column ${column}`)} className="square">    
    </div>  
  );
}

