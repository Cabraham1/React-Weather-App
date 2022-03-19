import React, { useState } from 'react';
const api = {
  key: '833d1728664eb4e79cf6ca955167067a',
  base: 'https://api.openweathermap.org/data/2.5'
}
function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const search = evt =>{
    if( evt === 'Enter') {
      fetch(`$(api.base)weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)});
        setQuery('');
        console.log(result);
    }
  }


  const dateBuilder = (d) => {
    let months = ['January', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

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
          <input type="text" className='search_bar' placeholder='Search...' name='search'
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyDown={search}/>
        </div>
        <div className="location_box">
          <div className="location">New York City, US</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather_box">
          <div className="temp">
            15°c
          </div>
          <div className="weather">
            Sunny
          </div>
        </div>
      </main>
    </div>
  );
}


export default App;
