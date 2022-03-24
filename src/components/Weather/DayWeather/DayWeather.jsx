import React from 'react';

const DayWeather = (props) => {

    const date = props.item.date

    return (
        <div>
            <div>
                {`Day: ${date}`}
            </div>
            <div>
                {`${props.item.temp}°C`}
            </div>
        </div>
    );
};

export default DayWeather;