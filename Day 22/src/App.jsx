import Template from './components/template'
import Meme from './components/Meme'
import React, { useEffect, useState } from 'react';
import './index.css'


function App() {

  const [memes, setMeme] = useState(null);
  const [template, setTemplate] = useState([])

  return (
    <div className="container">
     <center> <h1>Meme Generator</h1> </center> 
      {
        useEffect(() => {
          async function getapi() {
            const apiData = await fetch("https://api.imgflip.com/get_memes")
              .then(res => res.json())
              .then(data => data.data.memes)
            setTemplate(apiData)
          }
          getapi()
        },[])
      
      }

      {

        (memes === null) ?
          (template.map((item, index) =>
              <Template key={index} setMeme={setMeme} template={item}/>
          )) :
          <Meme memes={memes} setMeme={setMeme} />
          
      }



    </div>
  );
}

export default App;
