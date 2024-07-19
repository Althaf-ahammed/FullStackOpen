import { useEffect, useState } from "react"
import weatherServices from './services/weather'

function WeatherCard({country}) {
    const [weather, setWeather] = useState(null)

useEffect(() => {
    console.log(country);
    weatherServices.getWeather(country.capital[0])
    .then(response => setWeather(response))
}, [country])

console.log('response',weather);

if(!weather) {return null}
  return (
    <div>
        <h3>Weather in {country.capital[0]}</h3>
        <p>temperature {(weather.main.temp - 273.15).toFixed(2)} Celsius</p>
        <img alt={weather.weather[0].main} src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} ></img>
        <p>wind {weather.wind.speed} m/s</p>
    </div>
  )
}

export default WeatherCard