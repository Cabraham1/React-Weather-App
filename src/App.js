import React, { useState } from 'react';
import Axios from 'axios';



// Language: javascript
function App() {
  

    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState({});

    const api = '833d1728664eb4e79cf6ca955167067a'

   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
   const Search = (event) => {
     if (event.key === 'Enter') {
       Axios.get(url).then(res => {
         setWeatherData(res.data);
         console.log(res.data);
       });
       setCity("");
     }
    }

  const dateBuilder = (d) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }
  return (
    <div className="app sunny">
      <main>
        <div className="search_box">
          <input type="text" className='search_bar' placeholder='Search...'
          value={city}
          onChange={event => setCity(event.target.value)}
          onKeyPress={Search} />
        </div>
        <div className="location_box">
          <div className="location">
            {weatherData.name}, { weatherData.sys && weatherData.sys.country}
          </div>
          <div className="date">{dateBuilder (new Date())}</div>
        </div>
        <div className="weather_box">
          <div className="temp">
            {weatherData.main ? <p>{Math.round(weatherData.main.temp - 274.15) }<span>°C</span></p> : <p>Enter location</p>}
          </div>
          <div className="weather">
            {weatherData.main ? <p>{weatherData.weather[0].main}</p> : <p>Loading...</p>}
          </div>
        </div>
        <div className='bottom__card'>
          <div className='feels'>
            {weatherData.main ? <p>{Math.round(weatherData.main.feels_like - 274.15)}°C <br />Feels like</p> : <p>Loading...</p>}
          
          </div>
          <div className="Humidity">
            {weatherData.main ? <p>{weatherData.main.humidity}% <br />Humidity</p> : <p>Loading...</p>}
          
          </div>
          <div className="Wind">
            {weatherData.wind ? <p>{weatherData.wind.speed} MPH <br /> Wind Speed</p> : <p>Loading...</p>}
      
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;
