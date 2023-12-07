import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const WEATHER_API = `${API_BASE}/weather`

const request = axios.create({
    withCredentials: true,
});

export const getWeather = async (id) => {
    const response = await request.get(`${WEATHER_API}/current/${id}`);
    return response.data;
};
export const searchLocations = async (key) => {
    const response = await request.get(`${WEATHER_API}/search/${key}`);
    return response.data;
};