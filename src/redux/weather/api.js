import { API_KEY } from "../../secret";

export function fetchWeatherByLocation (location) {
    return fetch(
        `https://api.openweathermap.org/data/2.5/weather?` +
        `q=${location}&appid=` 
        + API_KEY)
    .then(result => result.json());
}