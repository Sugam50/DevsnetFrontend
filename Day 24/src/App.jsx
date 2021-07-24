import { Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import React, { useContext } from "react";
import { LoginContext } from "./Store";


function App() {
 const context=useContext(LoginContext)
  return (
    <div>
      <nav className="navbar">

        <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
        <Link style={{ textDecoration: 'none' }} to="/about">About</Link>
        <Link style={{ textDecoration: 'none' }} to="/profile">Profile</Link>
        <Link style={{ textDecoration: 'none' }} to="/dashboard">Dashboard</Link>
      </nav>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        {(context.state.loginstate==="logout")?
        <>
        <Route path="/profile" component={Profile} />
        <Route path="/dashboard" component={Dashboard} />
        </>
        :
        <>
        <Route path="/profile">
          <Redirect to="/"/>
        </Route>
        <Route path="/dashboard">
        <Redirect to="/"/>
        </Route>
        </>
        
        }


      </Switch>

    </div>
  );
}

export default App;
