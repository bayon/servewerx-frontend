import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';





function App() {

  const [data, setData] = useState(null);

   
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    // Production: http://67.205.153.202:3000
    // Local:     http://localhost:30000
    fetch('http://67.205.153.202:3000/url')
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
