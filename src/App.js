import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
        <Weather />
        <footer>
          This project is {" "}
          <a href="https://github.com/madpine/weather-react" target="_blank">open-sourced</a>
          {" "} and was coded by Maddie Pine
        </footer>
    </div>
  );
}

export default App;
