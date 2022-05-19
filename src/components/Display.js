import { useContext } from "react";
import { AppContext } from "./Context";

export default function Display () {

  const { xyArr } = useContext(AppContext);

  return (
    <div className="display"> 
      <h1>Hover Squares</h1>
        <section className="pars">
          {xyArr.map((item, i) => 
            <p key={i}>{item}</p>
          ).reverse()} 
        </section>
    </div>
  );
}