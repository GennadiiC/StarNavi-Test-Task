import axios from 'axios';
import { useState, useEffect } from 'react';
import Grid from './Grid';
import Display from './Display';

export default function Field () {

  const [ field, setField ] = useState([]);

  useEffect(() => {
    axios.get('http://demo7919674.mockable.io/')
      .then(response => {
        setField(response.data);
      })
      .catch(err => {
        console.log('Error fecthing and parsing data: ', err.message);
      })
  }, []);

  return (
    <div className="field-container">
      <Grid 
        field={field} 
      />
      <Display />
    </div>
  );
}
