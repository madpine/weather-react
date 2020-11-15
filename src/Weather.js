import React, { useState } from 'react';
import NiceDate from './NiceDate';
import axios from 'axios';
import './Weather.css';


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {

    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      time: "12:30",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: "https://www.flaticon.com/svg/static/icons/svg/566/566516.svg"
    })
  }

  if (weatherData.ready) {
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
                    autoComplete="off"
                    autoFocus="on"
                  />
                </div>
                <div className="col-2">
                  <input
                    type="submit"
                    value="Search"
                    className="search-button shadow-sm"
                  />
                </div>
                <div className="col-2"> 
                  <button className="search-button current-button shadow-sm">
                    Current
                  </button>
              </div>
              </div>
            </form>
          <div className="row">
            <div className="col-7">
              <h1 className="current-city">{weatherData.city}</h1>
                <p className="date-time">
                 <NiceDate date={weatherData.date} />
               </p>
                <div className="row">
                  <ul className="details">
                      <li>Humidity: {weatherData.humidity}%</li>
                      <li>Wind: {Math.round(weatherData.wind)} mph</li>
                      <li className="text-capitalize">Description: {weatherData.description}</li>
                  </ul>
                </div>
            </div>
            <div className="col-5">
              <div className="row">
                  <h2>
                    {Math.round(weatherData.temperature)}
                    <span className="unit">
                    <button> ˚C </button> | <button> ˚F </button>
                    </span>
                  </h2>
              </div>
              <div className="row icon">
                <img src={weatherData.iconUrl} alt={weatherData.description} />
              </div>
              </div>
          </div>
          <div className="card">
            <div className="card-body weekly-card">
                <div className="row"></div>
              </div>
            </div>
        </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "669df815a230d0606e20716b21beda24";
    let unit = "imperial"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse)

    return "Loading...";
  }
}