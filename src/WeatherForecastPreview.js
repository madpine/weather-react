import React from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherForecast.css';

export default function WeatherForecastPreview(props) {
    function hours() {
        let date = new Date(props.data.dt*1000)
        let hours = date.getHours()
        return `${hours}:00`
    }

    function temperature() {
        let temperature = Math.round(props.data.main.temp)
        return `${temperature}˚F`
    }

    return (
         <div className="col WeatherForecastPreview">
             {hours()}
            <WeatherIcon code={props.data.weather[0].icon} size={40}/>
            {temperature()}
        </div>
    );
}