import React from "react";
import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tel Aviv"/>
        <footer>
          <a href="https://github.com/madpine/weather-react" target="_blank" rel="noreferrer">Open-source code</a>
          {" "} by Maddie Pine
        </footer>
        </div>
    </div>
  );
}

export default App;
