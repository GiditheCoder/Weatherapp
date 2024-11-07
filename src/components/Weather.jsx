// import React, { useState } from 'react';
// import './Weather.css';
// import search_icon from '../assets/search.png';
// import clear_icon from '../assets/clear-sky.png';
// import cloud_icon from '../assets/clouds.png';
// import drizzle_icon from '../assets/drizzle.png';
// import rain_icon from '../assets/rain.png';
// import snow_icon from '../assets/snow.png';
// import wind_icon from '../assets/wind.png';
// import humidity_icon from '../assets/humidity.png';
// import useWeather from './useWeather'; // Import the custom hook

// const Weather = () => {
//   const allIcons = {
//     "01d": clear_icon,
//     "01n": clear_icon,
//     "02d": cloud_icon,
//     "03d": cloud_icon,
//     "03n": cloud_icon,
//     "04d": drizzle_icon,
//     "04n": drizzle_icon,
//     "09d": rain_icon,
//     "09n": rain_icon,
//     "10d": rain_icon,
//     "10n": rain_icon,
//     "13d": snow_icon,
//     "13n": snow_icon,
//   };

//   // Use useState to track the city input value
//   const [city, setCity] = useState('');
//   const { weatherData, search } = useWeather('Lagos', allIcons); // Call the custom hook

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent form default behavior (page refresh)
//     search(city); // Trigger the search with the form data (city)
//   };

//   return (
//     <div className='weather'>
//       <form onSubmit={handleSubmit} className="search-bar">
//         <input 
//           type="text" 
//           placeholder='Search'
//           value={city} // Bind the input value to the city state
//           onChange={(e) => setCity(e.target.value)} // Update state on input change
//         />
//         <button type="submit">
//           <img src={search_icon} alt="search"/>
//         </button>
//       </form>

//       {weatherData && (
//         <>
//           <img src={weatherData.icon} alt="weather" className='weather-icon'/>
//           <p className='temperature'> {weatherData.temperature}°C</p>
//           <p className='location'>{weatherData.location}</p>

//           <div className="weather-data">
//             <div className="col">
//               <img src={humidity_icon} alt="humidity" />
//               <div>
//                 <p>{weatherData.humidity} %</p>
//                 <span>Humidity</span>
//               </div>
//             </div>

//             <div className="col">
//               <img src={wind_icon} alt="wind" />
//               <div>
//                 <p>{weatherData.windSpeed} km/h </p>
//                 <span>Wind Speed</span>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Weather;



// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchWeather } from './weatherSlice';
// import { useWeatherContext } from './WeatherContext';
// import './Weather.css';
// `     `

// const Weather = () => {
//   const { city, setCity } = useWeatherContext();
//   const dispatch = useDispatch();
//   const { weatherData, status, error } = useSelector((state) => state.weather);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(fetchWeather(city));
//   };

//   return (
//     <div className='weather'>
//       <form onSubmit={handleSubmit} className="search-bar">
//         <input
//           type="text"
//           placeholder='Search'
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>

      
//       {weatherData && (
//         <>
//           <img src={weatherData.icon} alt="weather" className='weather-icon'/>
//           <p className='temperature'> {weatherData.temperature}°C</p>
//           <p className='location'>{weatherData.location}</p>

//           <div className="weather-data">
//             <div className="col">
//               <img src={humidity_icon} alt="humidity" />
//               <div>
//                 <p>{weatherData.humidity} %</p>
//                 <span>Humidity</span>
//               </div>
//             </div>

//             <div className="col">
//               <img src={wind_icon} alt="wind" />
//               <div>
//                 <p>{weatherData.windSpeed} km/h </p>
//                 <span>Wind Speed</span>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
    

//       {status === 'loading' && <p>Loading...</p>}
//       {status === 'failed' && <p>{error}</p>}
//       {weatherData && (
//         <div>
//           <img src={icons[weatherData.icon]} alt="weather icon" />
//           <p>{weatherData.temperature}°C in {weatherData.location}</p>
//           {/* Additional weather details */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Weather;



import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './weatherSlice';
import { useWeatherContext } from './WeatherContext';  // Use the city context
import './Weather.css';
import { TextField, Button, CircularProgress, Card, CardContent, Grid, Typography } from '@mui/material';
 // Example icons
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear-sky.png';
import cloud_icon from '../assets/clouds.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';

// const Weather = () => {
//   const { city, setCity } = useWeatherContext(); // Get city from context
//   const dispatch = useDispatch();
//   const { weatherData, status, error } = useSelector((state) => state.weather);

//   useEffect(() => {
//     if (city) {
//       dispatch(fetchWeather(city)); // Fetch weather data whenever the city changes
//     }
//   }, [city, dispatch]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(fetchWeather(city)); // Trigger fetching weather on form submit
//   };

//   return (
//     <div className='weather'>
//       <form onSubmit={handleSubmit} className="search-bar">
//         <input
//           type="text"
//           placeholder='Search'
//           value={city}
//           onChange={(e) => setCity(e.target.value)} // Update city from context
//         />
//         <button type="submit">Search</button>
//       </form>

//       {/* Display weather data if available */}
//       {status === 'loading' && <p>Loading...</p>}
//       {status === 'failed' && <p>{error}</p>}
//       {weatherData && (
//         <>
//           <img src={`https://openweathermap.org/img/wn/${weatherData.icon}.png`} alt="weather" className='weather-icon'/>
//           <p className='temperature'> {weatherData.temperature}°C</p>
//           <p className='location'>{weatherData.location}</p>

//           <div className="weather-data">
//             <div className="col">
//               <img src={humidity_icon} alt="humidity" />
//               <div>
//                 <p>{weatherData.humidity} %</p>
//                 <span>Humidity</span>
//               </div>
//             </div>

//             <div className="col">
//               <img src={wind_icon} alt="wind" />
//               <div>
//                 <p>{weatherData.windSpeed} km/h</p>
//                 <span>Wind Speed</span>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Weather;

const Weather = () => {
  const { city, setCity } = useWeatherContext(); // Get city from context
  const dispatch = useDispatch();
  const { weatherData, status, error } = useSelector((state) => state.weather);

  useEffect(() => {
    if (city) {
      dispatch(fetchWeather(city)); // Fetch weather data whenever the city changes
    }
  }, [city, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(city)); // Trigger fetching weather on form submit
  };

  return (
    <div className="weather">
      {/* Search Bar */}
      <form onSubmit={handleSubmit} className="search-bar" color='white'>
        <TextField

          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)} // Update city from context
          fullWidth
        />
        <Button variant="contained" type="submit" sx={{ marginLeft: 2 }}>
          <img src={search_icon} alt="search" style={{ width: 20 }} />
        </Button>
      </form>

      {/* Loading State */}
      {status === 'loading' && (
        <div className="loading">
          <CircularProgress />
          <Typography  color='white'variant="body1" sx={{ marginTop: 2 }}>
            Loading...
          </Typography>
        </div>
      )}

      {/* Error State */}
      {status === 'failed' && (
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      )}

      {/* Weather Data */}
      {weatherData && (
        <Card  sx={{ maxWidth: 400, marginTop: 3, padding: 2  }}>
          <CardContent sx={{ background: 'linear-gradient(45deg, #2f4680, #500ae4)', padding: 3 , }}>
            <Grid container spacing={2} direction="column" alignItems="center">
              {/* Weather Icon */}
              <Grid item>
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.icon}.png`}
                  alt="weather"
                  className="weather-icon"
                  style={{ width: 100 }}
                />
              </Grid>

              {/* Temperature and Location */}
              <Grid item>
                <Typography color='white' variant="h4">{weatherData.temperature}°C</Typography>
                <Typography  color='white' variant="h6">{weatherData.location}</Typography>
              </Grid>

              {/* Weather Details */}
              <Grid item container spacing={2}>
                <Grid item xs={6} container alignItems="center">
                  <img src={humidity_icon} alt="humidity" style={{ width: 24, marginRight: 8 }} />
                  <Typography color='white' variant="body1">{weatherData.humidity} %</Typography>
                  <Typography  color='white' variant="body2">Humidity</Typography>
                </Grid>

                <Grid item xs={6} container alignItems="center">
                  <img src={wind_icon} alt="wind" style={{ width: 24, marginRight: 8 }} />
                  <Typography color='white' variant="body1">{weatherData.windSpeed} km/h</Typography>
                  <Typography  color='white' variant="body2">Wind Speed</Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Weather;