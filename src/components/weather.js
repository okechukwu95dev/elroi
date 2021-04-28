import React, { useState } from 'react';
import DisplayWeather from "./displayweather"
import Location from "./location"
import "./weather.css";
import Dashboard from "./dashboard"
import  {global_data,new_data,nav_key} from './navigation'
import companyLogo from './images/mostly-sunny.svg';



var w_global_data ;
var w_new_data ;
var weather_key;
var w_local_key;

function Weather (props) {
    weather_key = 0;
    w_local_key = 0;
    // console.log(global_data)
    // console.log(new_data)
   

const APIKEY = "41ab2a27dcef2b980b65b6e80a12e24b";


//setting the state of form after deconstruction 
const [form,setForm] = useState({
    zipcode: ""
});

//create state for the weather and its data 
const [weather, setWeather] = useState({

})

const [key,setCount] = useState(
    0
);

async function weatherData(e){
    setCount(count => key +1);

    if (key == 0){
        weather_key = 0  
    }

    else{
        weather_key = 1
    }
    // setCount(weather_key)
    // console.log(key)
    
    e.preventDefault();
   

    var isValidZip = await (/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(form.zipcode));
  
    if (form.zipcode == ""  || !isValidZip ) 

    
    {
        alert("Add Correct 5 digit USA postcode values");
        window.location.reload();
      
    }

    else{
        const data = await fetch
        
        (`https://api.openweathermap.org/data/2.5/forecast?zip=${form.zipcode},us&appid=${APIKEY}`)
       
        .then(res => res.json())
        .then(data => data); 
        // console.log(data)
        if (data.cod != 200) {
            alert("Please Enter A Valid Code");
            window.location.reload();
        }

        setWeather (
            {
                data : data
            }
        )

        return data
    }
    }


//function to handle form input
const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value; 

    if (name == "city"){
        setForm({...form,city:value})
    }
    if (name == "country"){
        setForm({...form,country:value})
    }
    // console.log(form.city, form.country)
    if (name == "zipcode"){
        setForm({...form,zipcode:value});
    }
    // console.log(form.zipcode);
}

if (weather.data != undefined && weather.data.cod == 200){
    // console.log (weather.data)
        w_global_data = weather.data;
        w_new_data = [weather.data.list[0],weather.data.list[8],weather.data.list[16],weather.data.list[24],weather.data.list[32]];
        //  console.log(weather.data.list[0]);
        //  console.log(w_new_data);
     }

else{
    w_global_data = global_data;
    w_new_data = new_data;

}


    
    if (props.state =='display' || key > 0 ){

        return (
            // form to collect user input 
           
            <div className="weather"> 
            {
    
             w_new_data != undefined && (w_new_data.length>0)  ? (
                <div className = "location">  
    
    
                <Location 
                main_temp ={w_new_data[0].main.temp} 
                city_name = {w_global_data.city.name}  
                country_name =  {w_global_data.city.country}
                weather_main = {w_new_data[0].weather[0].main}
                current_date = {w_new_data[0].dt_txt.slice(0, 10)}
                icon = {w_new_data[0].weather[0].icon} 
                max_temp = {w_new_data[0].main.temp_max}
                min_temp = {w_new_data[0].main.temp_min}
                wind_speed = {w_new_data[0].wind.speed}
                humidity = {w_new_data[0].main.humidity}
                />
        
                </div> 
                )  : null
            }
    
    
            {
                        w_new_data != undefined && (w_new_data.length>0)  ? (
                        <div>  
                        <Dashboard />
                        </div> 
                        )  : null
            }       
            </div> 
            
            //end of return
        );
    }

    else if (props.state == 'home'){
        return(
            <div className = 'main'>
    
                <div  className = 'logo'>
                    <img src= {companyLogo} alt="logo image" ></img>
                    
                </div>
    
                <div className = "search-main">
                <form >
                    <input type = "text" name="zipcode" placeholder="ENTER zipcode in XXXXX format"  onChange={e => handleChange(e)}/>
                    <span className = 'main-btn'>
                    <button className = "submit" 
                    onClick={(e) => {weatherData(e) }}>Search</button>
                    </span>
               </form>
                </div>
            </div>
        )
    }

    else {
        return "";
    }

    //end of if statement
//end of function 
}

export default Weather;
export {w_new_data,w_global_data,weather_key};




