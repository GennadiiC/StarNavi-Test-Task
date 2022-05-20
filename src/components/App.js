import Field from "./Field";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context";
import { useState } from "react";

function App() {

  const [ field, setField ] = useState([]);

  const { xy, arrHandler } = useContext(AppContext);

  useEffect(() => {
    axios.get('https://demo7919674.mockable.io/')
      .then(response => {
        setField(response.data);
      })
      .catch(err => {
        console.log('Error fecthing and parsing data: ', err.message);
      })
  }, []);

  useEffect(() => {
    arrHandler()
  }, [xy])

  return (
    <div>
      <Field field={field} />
    </div>
  );
}

export default App;
