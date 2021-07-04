import Card from './components/Card'
import './index.css'

function App() {
  return (
    <div className="container">
      <h1> Calorie App</h1>
      <div className="main">
        <Card food="Pizza" Cal="56"/>
        <Card food="Poha" Cal="70"/>
        <Card food="Pani Puri" Cal="85"/>
        <Card food="Chat" Cal="36"/>
        <Card food="Sandwich" Cal="111"/>
        <Card food="Rice" Cal="96"/>
        <Card food="Manchurian" Cal="106"/>
      </div>
    </div>
  );
}

export default App;
