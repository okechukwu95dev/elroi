import React, { useState } from 'react';
import companyLogo from './images/logo.png';
import "./displayweather.css";
import "./navigation.css";
import Weather from "./weather"
import {weather_key} from "./weather"


let global_data = [];
let new_data = [];
let nav_key;

function Nav() {

nav_key = 0;

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
      
        e.preventDefault();
        setCount(count => key +1);
        
        if (key == 0){
            nav_key = 0  
        }
        else{
            nav_key = 1
        }
    
        let isValidZip = await (/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(form.zipcode));
  
        if (form.zipcode == ""  || !isValidZip ) 

        {
            alert("Add Correct 5 digit USA postcode values");
            console.log(form.zipcode)
            window.location.reload();
        }
    
        else{
            const data = await fetch 
            (`https://api.openweathermap.org/data/2.5/forecast?zip=${form.zipcode},us&appid=${APIKEY}`)
            .then(res => res.json())
            .then(data => data); 
            console.log(data)
            if (data.cod != 200) {
                alert("Please Enter A Valid Code");
                window.location.reload();
            }
            setWeather (
                {
                    data : data
                }
            )
            return key 
        }
    
        }

        console.log("hello");
        console.log(global_data);
        console.log("bye");

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value; 
    
        if (name == "city"){
            setForm({...form,city:value})
        }
        if (name == "country"){
            setForm({...form,country:value})
        }
        console.log(form.city, form.country)
        if (name == "zipcode"){
            setForm({...form,zipcode:value});
        }
    
        console.log(form.zipcode);
    }

    if (weather.data != undefined && weather.data.cod == 200){
        console.log (weather.data)
                global_data = weather.data;
                // nav_key = 1;
                new_data = [weather.data.list[0],weather.data.list[8],weather.data.list[16],weather.data.list[24],weather.data.list[32]];
                console.log(weather.data.list[0]);
                console.log(new_data);
            }
  

    return (
        <div className = "page">
        <div className = "nav">
        <div  className = 'logo'>
        <img src= {companyLogo} alt="logo image" ></img>
        <span>Weather</span>
        </div>

        <form className = "search">
            <input type = "text" name="zipcode" placeholder="SEARCH BY ZIPCODE"  onChange={e => handleChange(e)}/>
            <span className = "btn"> 
            <button className = " submit" onClick={(e) => weatherData(e)}>Submit</button>
            <button className = " reset" onClick={(e) => window.location.reload()}>Reset</button>
            </span>
        </form>
        </div>


{/* //Display weather from navbar */}
        {
                    new_data != undefined && (new_data.length>0) && key > 0 ? (
                    <div>  
                    <Weather state = 'display'/>
                    </div> 
                    ) : <Weather className = "w" state = "home"/>
        }     
     
        </div>  

    //end of reutbrn     
    );
}

        
export default Nav;
export {global_data,new_data,nav_key};