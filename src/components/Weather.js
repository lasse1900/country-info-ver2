import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState({
    current: {
      temperature: '-',
      wind_speed: '-',
      wind_dir: '-',
      weather_descriptions: '-',
      weather_icons: '-'
    }
  });
  const api_key = process.env.REACT_APP_APIXU_KEY
  const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`
  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setWeather(response.data)
      })
  }, [])

  // change km/h to m/s
  let temp = weather.current.wind_speed / 3.6
  temp = Math.round(temp * 100) / 100

  return (
    <div>
      <h1>Weather in {capital}</h1>
      <p>description: {weather.current.weather_descriptions}</p>
      <img src={weather.current.weather_icons} alt='empty' width='100' />
      <p>temperature: {weather.current.temperature}</p>
      <p><strong>wind:</strong> {temp} m/s, direction: {weather.current.wind_dir}</p>
    </div>
  )
};

export default Weather;
