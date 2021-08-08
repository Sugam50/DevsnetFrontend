import './App.css';
 interface userstype{
    name:string,
    age:number;

  }
function App() {
const users:userstype={
 name:"Cypher",
 age:21,
}
 
  return (
    <div className="App">
      <h1>{users.name}</h1>
      <h3>{users.age}</h3>
      
    </div>
  );
}

export default App;
