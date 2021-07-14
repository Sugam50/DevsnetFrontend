import Card from './components/Card'
import React, { useState } from 'react';
import './index.css'

function App() {

  const [State, setState] = useState(["Pizza", "Poha", "Pani Puri", "Chat", "Sandwich", "Rice", "Manchurian"])
  const [calorie, setCalorie] = useState([56, 72, 53, 94, 102, 62, 131])

  // console.log(State)
  return (
    <div className="container">
      <h1> Calorie App</h1>
      <div className="main">
        {
          State.map((item, index) =>
          <Card food={item} key={index} Cal={calorie[index]} setCalorie={setCalorie} List={State} List2={calorie} setState={setState} />
        )
        }

      </div>
    </div>
  );
}

export default App;
