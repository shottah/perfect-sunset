import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "./redux/weather/action";
import { locationSelector, weatherSelector } from "./redux/weather/selector";

export default () => {
    const dispatch = useDispatch();
    const location = useSelector(locationSelector);
    const weather = useSelector(weatherSelector);
    const error = useSelector(state => state.weather.error);

    const setLoc = () => {
        dispatch(setLocation('London, UK'));
    }

    return (
        <div>
            <h1>Weather App</h1>
            <p>Location: {location}</p>
            <button onClick={setLoc}>Click to Set</button>
            <div>Error: {JSON.stringify(error)}</div>
            <div>Data: {JSON.stringify(weather)}</div>
        </div>
    );
}