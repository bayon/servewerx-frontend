import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { AuthContext } from "./context/auth";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App(props) {
  const [authTokens, setAuthTokens] = useState();
  /*
  const [data, setData] = useState([]);
  const api_prod = "http://67.205.153.202:3000/api/vTest/junk"
  const api_dev = "http://localhost:3000/api/vTest/junk"
    useEffect(() => {
    // GET request using fetch inside useEffect React hook
    // Production:    http://67.205.153.202:3000/url
    // Development:   http://localhost:3000/url
    fetch(api_prod)
        .then(response => response.json())
        .then(data => setData(data));

  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  var display = JSON.stringify(data) // TO DISPLAY:  <div>{display}</div>
  */

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/admin">Admin Page</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/admin" component={Admin} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

/*
function App() {

  const [data, setData] = useState([]);
  const api_prod = "http://67.205.153.202:3000/api/vTest/junk"
  const api_dev = "http://localhost:3000/api/vTest/junk"
   
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    // Production:    http://67.205.153.202:3000/url
    // Development:   http://localhost:3000/url
    fetch(api_prod)
        .then(response => response.json())
        .then(data => setData(data));

  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  var display = JSON.stringify(data)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  <div>{display}</div>
      </header>
    </div>
  );
}

export default App;
*/
