import Button from './components/Button'
import './index.css'

function App() {

  var arr = [1, 2, 3, 4];

  return (
    <div className="container">
      <h3> There are 4 counter component instances that each manage their own state.</h3>
      <div className="btns">
        {
          arr.map(item =>

            <Button key={item} />

          )
        }
      </div>
    </div>
  );
}

export default App;
