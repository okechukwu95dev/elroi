import React from 'react';

import "./location.css";





function Location(props){
    const iconurl = "http://openweathermap.org/img/wn/" + `${props.icon}`+ "@2x.png";

    return (
        <div className="loc  ">
            <div className="left">
            <div className = "place">
                <h1 className="">{props.city_name},{props.country_name}</h1>
                </div>
                <div className="temp">
                    <span>Current Temp:    </span> 
                    { "  " +   Math.floor(((props.main_temp)-273)*(9/5)+32)} <sup>o</sup>F
                </div>

                <div className="current-temperature__summary">{props.current_date}</div>
                
                <div>{new Date().toLocaleTimeString(`en-${props.country_name}`)}</div>
            </div>
                
   


   <div className = 'right'>
        <div className ='up'>

            <div className = 'current'>
            <h3>Overview</h3>
            <img src ={iconurl} className = "weather-icon" alt = "weather icon" />
            </div>

            <div className = 'current'>
                <h3>Weather</h3>
                {props.weather_main}
            </div>

            <div className = 'current'>
                <h3>Max Temp</h3>
                {Math.floor(((props.max_temp)-273)*(9/5)+32)}<sup>o</sup>F
            </div>


        </div>
        <div className = 'down'>
            <div className = 'current'>
                <h3>Wind Speed</h3>
                {props.wind_speed + " mph"}
            </div>

            <div className = 'current'>
                <h3>Humidity</h3>
                {props.humidity + "%"}
            </div>

            <div className = 'current'>
                <h3>Min Temp</h3>
                {Math.floor(((props.min_temp)-273)*(9/5)+32)}<sup>o</sup>F
            </div>

        </div>
    </div>    
        </div>
    ) 

}

export default Location;




