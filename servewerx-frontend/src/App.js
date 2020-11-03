import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';

function App() {

  const [data, setData] = useState(null);
  const api_prod = "http://67.205.153.202:3000/url"
  const api_dev = "http://localhost:3000/url"
   
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    // Production:    http://67.205.153.202:3000/url
    // Development:   http://localhost:3000/url
    fetch(api_prod)
        .then(response => response.json())
        .then(data => setData(data));

  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

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
        <div>{data}</div>
      </header>
    </div>
  );
}

export default App;