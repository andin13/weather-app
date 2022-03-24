import React from 'react';

const WeatherItem = (props) => {

    const time = new Date(props.item.time)

    return (
        <div>
            <div>
                {`Time: ${time.getHours()}:00`}
            </div>
            <div>
                {`${props.item.temp}°C`}
            </div>
        </div>
    );
};

export default WeatherItem;