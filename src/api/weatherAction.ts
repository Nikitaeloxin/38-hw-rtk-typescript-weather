import {api_key, base_url} from "../utils/constants";
import {changeMessage} from "../features/slices/messageSlice";
import {changeWeather} from "../features/slices/weatherSlice";
import {AppDispatch} from "../app/store";


// export const CHANGE_WEATHER = 'CHANGE_WEATHER';
//
//
// export const changeWeather = weather => ({
//     type: CHANGE_WEATHER,
//     payload: weather
// })

export const fetchWeather = (city:string) => {
    return (dispatch: AppDispatch) => {
        // dispatch(pendingWeather())
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(response => response.json())
            .then(data =>{
                dispatch(changeMessage(null)); dispatch(changeWeather(data))} )
             .catch(e=>dispatch(changeMessage('Enter correct city name')))
    }
}

