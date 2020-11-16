import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo';
import axios from 'axios';
import './Weather.css';


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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

  function search() {
    const apiKey = "669df815a230d0606e20716b21beda24";
    let unit = "imperial"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse)
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);

  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body whole-card shadow-sm">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-7">
                  <input
                    type="search"
                    name="City"
                    className="city-search"
                    placeholder="Search for a city..."
                    autoComplete="off"
                    autoFocus="on"
                    onChange={handleCityChange}
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
            <WeatherInfo data={weatherData}/>
          
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
    search();
    return "Loading...";
  }
}