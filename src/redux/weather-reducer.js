import {weatherAPI} from "../api/api";

const SET_TEMP_DATA = 'SET_TEMP_DATA';

const initialState = {
    initialized: false,
    currentTemperature: '',
    hourWeather: [],
    dailyWeather: []
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEMP_DATA: {
            return {
                ...state,
                initialized: true,
                currentTemperature: action.currentTemperature,
                hourWeather: action.hourWeather,
                dailyWeather: action.dailyWeather,
            };
        }
        default:
            return state;
    }
}

export const setTempData = (currentTemperature, hourWeather, dailyWeather) => ({
    type: SET_TEMP_DATA,
    currentTemperature,
    hourWeather,
    dailyWeather
});

export const requestTemperatureData = (city = 'Bishkek') => {
    return async (dispatch) => {

        const data = await weatherAPI.getForecast(city);
        const currentTime = new Date();
        const addDayConst = 86400000;
        //Getting hour weather
        let hourWeather = data.forecast.forecastday[0].hour.filter(item => currentTime.getTime() < (item.time_epoch * 1000));
        hourWeather = hourWeather.map(item => ({time: item.time_epoch * 1000, temp: item.temp_c}));
        //Getting next day hour weather
        let nextDayHourWeather = data.forecast.forecastday[1].hour.filter(item => (currentTime.getTime() + addDayConst) > (item.time_epoch * 1000));
        nextDayHourWeather = nextDayHourWeather.map(item => ({time: item.time_epoch * 1000, temp: item.temp_c}));
        //Splicing current day and next day hour weather
        hourWeather = [...hourWeather, ...nextDayHourWeather]
        //Getting daily weather
        const dailyWeather = data.forecast.forecastday.map(item => ({date: item.date, temp: item.day.avgtemp_c}));
        dailyWeather.splice(0,1);

        dispatch(setTempData(data.current.temp_c, hourWeather, dailyWeather));
    }
}

export default weatherReducer;