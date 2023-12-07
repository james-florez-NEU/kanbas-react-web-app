import React, { useState, useEffect } from 'react';
import * as client from "../../users/client";

const WeatherDisplay = () => {
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = async () => {
        try {
            const weather = await client.currentWeather();
            setWeatherData(weather.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    useEffect(() => {
        fetchWeatherData();
    }, []);

    return (
        <div>
            <h2>Weather Information</h2>
            {weatherData ? (
                <div>
                    <h3>Location: {weatherData.location.name}</h3>
                    <p>Temperature: {weatherData.current.temp_c}°C</p>
                    <p>Condition: {weatherData.current.condition.text}</p>
                    {/* Add more weather details as needed */}
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
};

export default WeatherDisplay;
