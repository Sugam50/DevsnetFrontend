import { useContext } from "react";
import {LoginContext} from "../Store"

export default function Home() {
  const context=useContext(LoginContext);
  var val;
  (context.state.loginstate==="login")?
    val="logout":val="login";  
 
    return (
      <div className="Home">
        <h1>Home</h1>
        <h1> If not logged in cant access, Profile & Dashboard</h1>
        <button onClick={()=>{
          context.dispatch({
            type:"login",
            value:val
          })
        }}>{context.state.loginstate}</button>
      </div>
    );
  }
  