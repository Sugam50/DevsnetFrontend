import Card from './components/Card'
import React, { useState } from 'react';
import './index.css'
import Button from '@material-ui/core/Button';

function App() {

  var [State, setState] = useState([])
  var [calorie, setCalorie] = useState([])
  var [chnge, setChange] = useState(-1)

  var nam, cls;
  function handlevent(ev) {
    if(nam && cls){
      setState(State.concat(nam));
      setCalorie(calorie.concat(parseInt(cls)));
    }
    else{
      alert("Name or Value Missing")
    }
  }
 
  return (
    <div className="container">
      <form>
        <label>
          Name : <input type="text" placeholder="Food" onChange={(e) => {
            nam = e.target.value;
           }} ></input>

        </label>
        <label>
          Value : <input type="number" placeholder="calorie" onChange={(e2) => {
            cls = e2.target.value
          }}></input>

        </label>
        <Button variant="contained" color="primary" type="reset" onClick={(ev) => {
          handlevent(ev)
        }}>Add</Button>
      </form>

      <div className="main">
        {
          
          (State.length > 0) ?
            State.map((item, index) =>
              <Card food={item} key={index} index={index} Cal={calorie[index]} setCalorie={setCalorie} List={State}
                List2={calorie} setState={setState} chnge={chnge} setChange={setChange} />

            )
            : <h1>This List is empty</h1>
           
        }

      </div>
    </div>
  );
}

export default App;
