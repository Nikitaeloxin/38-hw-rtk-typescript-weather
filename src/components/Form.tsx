import React, {ChangeEvent} from 'react';
import {useDispatch} from "react-redux";
import {fetchWeather} from "../api/weatherAction";
import {useAppDispatch} from "../app/hooks";

const Form = () => {
    const dispatch = useAppDispatch();

    const handleClickGetWeather = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const city = e.currentTarget.city.value;
        dispatch(fetchWeather(city))
    }
    return (
        <form onSubmit={handleClickGetWeather}>
            <input type='text' name='city' placeholder='City'/>
            <button type='submit'>Get weather</button>
        </form>

    );
}

export default Form;