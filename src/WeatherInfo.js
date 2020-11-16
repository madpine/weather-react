import React from 'react';
import NiceDate from './NiceDate';

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
                        <h2>
                            {Math.round(props.data.temperature)}
                            <span className="unit">
                            <button> ˚C </button> | <button> ˚F </button>
                            </span>
                        </h2>
                    </div>
                    <div className="row icon">
                        <img src={props.data.iconUrl} alt={props.data.description} />
                    </div>
                </div>
            </div>
        </div>
    );
}