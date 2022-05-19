import { useContext, useEffect } from "react";
import { AppContext } from "./Context";

export default function Display () {

  const { xy, xyArr, setXyArr } = useContext(AppContext);

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

  useEffect(() => {
    arrHandler()
  }, [xy])

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