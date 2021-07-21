import './index.css'
import { Input,Button } from '@material-ui/core';
import useImage from './components/getImage';

function App() {
  const [images, setImage] = useImage()
  var name;
  return (
    <div className="App">

      <div className="container">
        <Input color="primary" type="text"  placeholder="enter a name" onChange={(e) => {
          name = e.target.value;
        }}></Input>

        <Button type="reset" variant="contained" color="secondary" onClick={() => {
          setImage(name)
        }}> Get Image</Button>

      </div>
      <img className="imgs" src={images} alt=" "></img>
      
    </div>
  );
}

export default App;
