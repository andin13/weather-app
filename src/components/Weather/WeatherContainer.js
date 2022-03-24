import React from 'react';
import Weather from "./Weather";
import connect from "react-redux/lib/connect/connect";

class WeatherContainer extends React.Component {
    render() {
        return (
            <Weather currentTemperature={this.props.currentTemperature}
                     hourWeather={this.props.hourWeather}
                     dailyWeather={this.props.dailyWeather}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    currentTemperature: state.weather.currentTemperature,
    hourWeather: state.weather.hourWeather,
    dailyWeather: state.weather.dailyWeather,
})

export default connect(mapStateToProps)(WeatherContainer);