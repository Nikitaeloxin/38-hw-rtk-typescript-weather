import React from 'react';
import {useSelector} from "react-redux";
import {useAppSelector} from "../app/hooks";
// import {WeatherClass} from "../utils/constants";


const Weather = () => {
    const {weather} = useAppSelector<{weather: any}>(store=>store.weather);
    const message = useAppSelector(store=>store.message);


    return (
        <div className='infoWeath'>
            {!message &&
                <div>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {new Date(Number(weather.sunset) * 1000).toLocaleTimeString()}</p>
                </div>}
            <p>{message}</p>
        </div>
    );


};

export default Weather;