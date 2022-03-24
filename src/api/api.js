import * as axios from "axios";

export const weatherAPI = {
    getForecast(city = 'Bishkek') {
        return axios.get(`http://api.weatherapi.com/v1/forecast.json?key=783890207c8345218bf192519222103&q=${city}&days=10`)
            .then(response => {
                return response.data;
            });
    }
}