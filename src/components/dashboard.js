import React from 'react';
import {w_new_data,w_global_data} from './weather.js'
import DisplayWeather from "./displayweather"
import "./dashboard.css";


function Dashboard () {
    console.log(w_new_data);
    console.log(w_global_data);
    var days = ["Monday","Tuesday","Wednesday","Thursday","Friday"];


function createDashboard(w_new_data,i){
    
    return (
        <div>
                 <h1 className = "date">{days[i]}</h1> 
                <DisplayWeather
                        main_temp = {w_new_data.main.temp}
                        weather_main = {w_new_data.weather[0].main}
                        main_temp_max  = {w_new_data.main.temp_max}
                        icon = {w_new_data.weather[0].icon} 
                />
        </div>
  
    )
}
if (w_new_data.length > 1){
    return (
        <div className = "dashboard">
           
             <div>  
        
         {console.log(w_new_data)} 
        
         <div className = 'data'>
             {
             w_new_data.map((createDashboard,days) => {
                 <div key = {days}>
                    {createDashboard} 
                 </div>
             })
             }

         {w_new_data.map(createDashboard,days)}
         
         </div>
       </div> 
        </div>
     
        )}else if (w_new_data.length < 1) {
         return (<h1>Waiting</h1>)  
        }
    
    }


     export default Dashboard;

  



    