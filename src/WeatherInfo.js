import React from 'react';
import NiceDate from './NiceDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';
import './Weather.css';

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row">
                <div className="col-7">
                 <h1 className="current-city">{props.data.city}</h1>
                    <p className="date-time">
                        <NiceDate date={props.data.date} />
                    </p>
                    <div className="row">
                        <ul className="details">
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {Math.round(props.data.wind)} mph</li>
                            <li className="text-capitalize">Description: {props.data.description}</li>
                        </ul>
                    </div>
                </div>
                <div className="col-5">
                    <div className="row">
                        <WeatherTemperature fahrenheit={props.data.temperature} />
                    </div>
                    <div className="row">
                        <div className="weatherIcon">
                            <WeatherIcon code={props.data.icon} size={70}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}