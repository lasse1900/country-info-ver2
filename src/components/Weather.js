import React, { useState } from "react";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState({});

  const search = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
      });
  }

  return (
    <div>
      <main>
        <div>
          <div>
            <br></br>
          </div>
          <button onClick={() => search()}>get weather in capital</button>
          <div>
            <br></br>
          </div>
        </div>

        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location"><i>Weather in <strong>{weather.name}</strong></i>:</div>
              <br></br>
            </div>
            <div className="weather-box">
              <div className="temp">
                <i>temp</i>: {Math.round(weather.main.temp)}°C
            </div>
              <div className="weather">
                <i>visibility</i>: {weather.weather[0].main}
              </div>
            </div>
            <div>
              <i>wind</i>: {Math.round(weather.wind.speed)} m/s
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
};

export default Weather;