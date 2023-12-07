import React, { useState, useEffect } from 'react';
import * as client from "../../users/client";
import {Route, Router, Routes} from "react-router";
import {Link} from "react-router-dom";
import WeatherDetails from "../Details/weatherDetails";

const WeatherCard = () => {
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = async () => {
        try {
            const weather = await client.currentWeather();
            setWeatherData(weather);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    useEffect(() => {
        fetchWeatherData();
    }, []);

    return (
        <Routes>
        <div>
            {weatherData ? (
                <Link to="details">
                    <div className="card">
                        <div className="card-body">
                            <img src={weatherData.current.condition.icon} alt="Weather Icon" className="float-end" />
                            <h3 className="card-title">{weatherData.location.name}</h3>
                            <p className="card-text">Temperature: {weatherData.current.temp_f}°F</p>
                            <p className="card-text">Condition: {weatherData.current.condition.text}</p>
                            <ul className="list-group list-group-flush">
                                <li className={"list-group-item"}>Feels Like: {weatherData.current.feelslike_f}°F</li>
                                <li className={"list-group-item"}>Precipitation: {weatherData.current.precip_in} in</li>
                                <li className="list-group-item">Humidity: {weatherData.current.humidity}%</li>
                                <li className={"list-group-item"}>Pressure: {weatherData.current.pressure_in} in</li>
                                <li className={"list-group-item"}>UV Index: {weatherData.current.uv}</li>
                                <li className={"list-group-item"}>Visibility: {weatherData.current.vis_miles} miles</li>
                                <li className={"list-group-item"}>Cloud Cover: {weatherData.current.cloud} %</li>
                                <li className="list-group-item">Wind Speed: {weatherData.current.wind_kph} km/h</li>
                                <li className={"list-group-item"}>Wind Gust: {weatherData.current.gust_kph} km/h</li>
                                <li className={"list-group-item"}>Wind Direction: {weatherData.current.wind_dir}</li>
                                <li className={"list-group-item"}>Wind Degree: {weatherData.current.wind_degree}°</li>
                            </ul>
                        </div>
                    </div>
                </Link>
            ) : (
                <p>Loading weather data...</p>
            )}

            <Route path="details" element={<WeatherDetails weatherData={weatherData} />} />
        </div>
        </Routes>
    );
};

export default WeatherCard;
