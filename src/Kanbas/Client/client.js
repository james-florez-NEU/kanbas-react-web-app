import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const WEATHER_URL = `${API_BASE}/weather`

export const getWeather = async (id) => {
    const response = await axios.get(`${WEATHER_URL}/current/${id}`);
    return response.data;
};
export const searchLocations = async (key) => {
    const response = await axios.get(`${WEATHER_URL}/search/${key}`);
    return response.data;
};