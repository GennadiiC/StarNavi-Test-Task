import { useState, useEffect, useContext } from 'react';
import Square from './Square';
import { AppContext } from './Context';

export default function Grid ({ field }) {

  const { resetXy, resetXyArr } = useContext(AppContext);

  const [ choice, setChoice ] = useState();
  const [ submit, setSubmit ] = useState();

  useEffect(() => {
    setSubmit(false)
    resetXy()
    resetXyArr()
  }, [choice])

  let squares = Array.from({length: choice});

  return (
    <div className="grid-container">
      <div className="input-field">
        <select  
          value={choice}
          defaultValue={'default'}
          onChange={(e) => setChoice(e.target.value)}
        >
          <option value={'default'} disabled>Pick mode</option>
          {field.map((opt, i) => 
            <option 
              key={i} 
              value={opt.field}
            >
              {opt.name.charAt(0).toUpperCase() + opt.name.slice(1)}
            </option>
          )}
        </select>
        <button 
          onClick={() => setSubmit(!submit)}
          disabled={submit}
        >
          START
        </button>
      </div>
      { submit && squares.length === 15 ? 
          <div className='grid-15'>
            {
              squares.map((item, i) => 
                <Square 
                  key={i} 
                  row={ i >= 0 && i <= 4 ? 1 : i >= 5 && i <=9 ? 2 : i >= 10 && i <= 14 ? 3 : null }
                  column={
                    i === 0 || i === 5 || i === 10 ? 1 :
                    i === 1 || i === 6 || i === 11 ? 2 :
                    i === 2 || i === 7 || i === 12 ? 3 :
                    i === 3 || i === 8 || i === 13 ? 4 :
                    i === 4 || i === 9 || i === 14 ? 5 :
                    null
                  }
                />
              )
            }
          </div> :
        submit && squares.length === 5 ? 
          <div className='grid-5'>
            {
              squares.map((item, i) => 
                <Square 
                  key={i}
                  row={ i >= 0 && i <= 2 ? 1 : i >= 3 ? 2 : null }
                  column={
                    i === 0 || i === 3 ? 1 :
                    i === 1 || i === 4 ? 2 : 
                    i === 2 ? 3 :
                    null
                  }
                />
              )
            }
          </div> :
        submit && squares.length === 25 ?
          <div className='grid-25'>
            {
              squares.map((item, i) => 
                <Square 
                  key={i}
                  row={ 
                    i >= 0 && i <= 4 ? 1 : 
                    i >= 5 && i <=9 ? 2 : 
                    i >= 10 && i <= 14 ? 3 : 
                    i >= 15 && i <= 19 ? 4 :
                    i >= 20 && i <= 24 ? 5 :
                    null 
                  }
                  column={
                    i === 0 || i === 5 || i === 10 || i === 15 || i === 20 ? 1 :
                    i === 1 || i === 6 || i === 11 || i === 16 || i === 21 ? 2 :
                    i === 2 || i === 7 || i === 12 || i === 17 || i === 22 ? 3 :
                    i === 3 || i === 8 || i === 13 || i === 18 || i === 23 ? 4 :
                    i === 4 || i === 9 || i === 14 || i === 19 || i === 24 ? 5 :
                    null
                  }
                />
              )
            }
          </div> :
        <></> 
      }
    </div>
  );
}