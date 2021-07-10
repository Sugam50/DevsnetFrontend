import Card from './components/Card'
import './index.css'

function App() {

  var arr = ["Pizza", "Poha", "Pani Puri", "Chat", "Sandwich", "Rice", "Manchurian",]

  return (
    <div className="container">
      <h1> Calorie App</h1>
      <div className="main">
        {
          arr.map((item, index) =>

            <Card key={index} food={item} />

          )
        }
      </div>
    </div>
  );
}

export default App;
