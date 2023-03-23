import {createSlice} from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {weather:{
        country: '',
        city: '',
        temp: '',
        pressure: '',
        sunset: ''
    }},
    reducers: {
        changeWeather(state, action) {
            state.weather = {
                country : action.payload.sys.country,
                 city : action.payload.name,
                 temp :action.payload.main.temp,
                pressure: action.payload.main.pressure,
                sunset : action.payload.sys.sunset
            }
        }
    }
})

export const {changeWeather} = weatherSlice.actions
export default weatherSlice.reducer