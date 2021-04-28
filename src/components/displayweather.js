import React from 'react';
import "./displayweather.css";



function DisplayWeather(props){
    // console.log(props);
    const iconurl = "http://openweathermap.org/img/wn/" + `${props.icon}`+ "@2x.png";


    return (
        <div className = "displayweather">
            
            <div className = "maincard">
                <h1>
                    {Math.floor(((props.main_temp)-273)*(9/5)+32)}
                    <sup>o</sup>
                    F
                </h1>

                <div className = "max-temp"> 
                Max temp:{Math.floor(((props.main_temp_max)-273)*(9/5)+32)} <sup>o</sup>F
                </div>
                <span className = "weather-main">
                    {props.weather_main}
                </span>
                <img src ={iconurl} className = "weather-icon" alt = "weather icon" />
                </div> 
        </div>
    )
}

export default DisplayWeather;