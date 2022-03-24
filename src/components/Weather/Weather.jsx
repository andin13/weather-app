import React from 'react';
import WeatherItem from "./WeatherItem/WeatherItem";
import DayWeather from "./DayWeather/DayWeather";

const Weather = (props) => {

    const currentTemperature = props.currentTemperature;
    const hourWeather = props.hourWeather.map(item => <WeatherItem key={item.time} item={item}/> );
    const dailyWeather = props.dailyWeather.map(item => <DayWeather key={item.date} item={item}/>);

    return (
        <div>
            <h1>Current temperature</h1>
            <h1>{`${currentTemperature}°C`}</h1>
            <h2>Hourly temperature</h2>
            <div>{hourWeather}</div>
            <h2>Daily temperature</h2>
            <div>{dailyWeather}</div>
        </div>
    );
};

export default Weather;