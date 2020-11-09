import React from 'react';
import './Weather.css';


export default function Weather() {
  let weatherData = {
    city: "Tel Aviv",
    date: "October 12, 2020",
    time: "12:30",
    temperature: 82,
    description: "Cloudy",
    humidity: 56,
    wind: 5
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-body whole-card shadow-sm">
          <form>
            <div className="row">
              <div className="col-7">
                <input
                  type="search"
                  name="City"
                  className="city-search"
                  placeholder="Search for a city..."
                  autocomplete="off"
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="search-button shadow-sm"
                />
              </div>
              <div className="col-2"> </div>
            </div>
          </form>
          <button className="search-button current-button shadow-sm">
            Current
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <h1 className="current-city">{weatherData.city}</h1>
          <p className="date-time">
            {weatherData.date} | {weatherData.time}
          </p>
          <div className="row">
            <p className="details">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}mph</li>
                <li>Description: {weatherData.description}</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="col-5">
          <div className="row">
            <h2>
              {weatherData.temperature}
              <span className="unit">
                <button> ˚C </button> | <button> ˚F </button>
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body weekly-card">
          <div className="row"></div>
        </div>
      </div>
      <p className="github-link">
        <a href="https://github.com/madpine/weather-react">
          Open-source code
        </a>{" "}
        by Maddie Pine
      </p>
    </div>
  );
}