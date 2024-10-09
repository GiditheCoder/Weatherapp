import React, { useState, useEffect, useRef } from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear-sky.png';
import cloud_icon from '../assets/clouds.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';

const Weather = () => {
     
  
  // get an object to store the WeatherData
  const [weatherData , setWeatherData] = useState(false)
 

  // we want to use our own icons


  const allIcons = {
    "01d" : clear_icon,
    "01n" : clear_icon,
    "02d" : cloud_icon,
    "03d" : cloud_icon,
    "03n" : cloud_icon,
    "04d" : drizzle_icon,
    "04n" : drizzle_icon,
    "09d" : rain_icon,
    "09n" :  rain_icon,
    "10d" : rain_icon,
    "10n" : rain_icon,
    "13d" : snow_icon,
    "13n" : snow_icon,
  }


  const inputRef = useRef()

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json(); // Await here to resolve the promise
      console.log(data);
      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity : data.main.humidity ,
        windSpeed : data.wind.speed , 
        temperature : Math.floor(data.main.temp) ,
        location : data.name ,
        icon : icon
      })
    } catch (error) {
      console.error("Error fetching the weather data:", error);
    }
  };
  

  useEffect(()=>{
    search("Lagos")
  }, [])

  return (
    <div className='weather'>
    <div className="search-bar">
      <input ref={inputRef} type="text" placeholder='Search'/>
      <img src={search_icon} alt="search" onClick={()=> search(inputRef.current.value)}/>
    </div>

    <img src={weatherData.icon} alt="clear" className='weather-icon'/>
    <p className='temperature'> {weatherData.temperature}°C</p>
    <p className='location'>{weatherData.location}</p>


    <div className="weather-data">
       <div className="col">
        <img src={humidity_icon} alt="humidity" />

        <div>
          <p>{weatherData.humidity} %</p>
          <span>Humidity</span>
        </div>
       </div>


       {/* second */}

       <div className="col">
        <img src={humidity_icon} alt="humidity" />

        <div>
          <p>{weatherData.windSpeed} km/h </p>
          <span>Wind Speed</span>
        </div>
       </div>

    </div>
    </div>
  );
};

export default Weather;