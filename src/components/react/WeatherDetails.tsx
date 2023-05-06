import React from "react";
import Input from "./Input";
import WeatherCard from "./WeatherCard";

export default function WeatherDetails() {
  const [weatherData, setWeatherData] = React.useState(null);

  return (
    <div>
      <Input setWeatherData={setWeatherData} />
      {weatherData && (
        <ul className="list-container">
          <WeatherCard>
            <h2 className="heading">City</h2>
            <div className="city-container">
              <div className="city-name">
                {weatherData.name}, {weatherData.sys.country}
              </div>
              <div className="data-container">
                <div className="label-container">
                  <div className="keys">Sunrise: </div>
                  <div className="values">
                    {new Date(weatherData.sys.sunrise).toLocaleTimeString()}
                  </div>
                </div>
                <div className="label-container">
                  <div className="keys">Sunset: </div>
                  <div className="values">
                    {new Date(weatherData.sys.sunset).toLocaleTimeString()}
                  </div>
                </div>
              </div>
            </div>
          </WeatherCard>
          <WeatherCard>
            <h2 className="heading">Coordinates</h2>
            <div className="data-container">
              <div className="label-container">
                <div className="keys">Longitude: </div>
                <div className="values">{weatherData.coord.lon}</div>
              </div>
              <div className="label-container">
                <div className="keys">Latitude: </div>
                <div className="values">{weatherData.coord.lat}</div>
              </div>
            </div>
          </WeatherCard>
          <WeatherCard>
            <h2 className="heading">Weather</h2>
            <div className="weather">{weatherData.weather[0].main}</div>
            <div className="weather">{weatherData.weather[0].description}</div>
          </WeatherCard>
          <WeatherCard>
            <h2 className="heading">Wind</h2>
            <div className="data-container">
              <div className="label-container">
                <div className="keys">Wind Speed: </div>
                <div className="values">{weatherData.wind.speed}</div>
              </div>
              <div className="label-container">
                <div className="keys">Deg: </div>
                <div className="values">{weatherData.wind.deg}</div>
              </div>
              <div className="label-container">
                <div className="keys">Gust: </div>
                <div className="values">{weatherData.wind.gust}</div>
              </div>
            </div>
          </WeatherCard>
          <WeatherCard>
            <h2 className="heading">Temperature</h2>
            <div className="data-container">
              <div className="label-container">
                <div className="keys">Temp: </div>
                <div className="values">{weatherData.main.temp}</div>
              </div>
              <div className="label-container">
                <div className="keys">Feels like: </div>
                <div className="values">{weatherData.main.feels_like}</div>
              </div>
              <div className="label-container">
                <div className="keys">Temp Min: </div>
                <div className="values">{weatherData.main.temp_min}</div>
              </div>
              <div className="label-container">
                <div className="keys">Temp Max: </div>
                <div className="values">{weatherData.main.temp_max}</div>
              </div>
              <div className="label-container">
                <div className="keys">Pressure: </div>
                <div className="values">{weatherData.main.pressure}</div>
              </div>
              <div className="label-container">
                <div className="keys">Humidity: </div>
                <div className="values">{weatherData.main.humidity}</div>
              </div>
              <div className="label-container">
                <div className="keys">Sea Level: </div>
                <div className="values">{weatherData.main.sea_level}</div>
              </div>
              <div className="label-container">
                <div className="keys">Ground Level: </div>
                <div className="values">{weatherData.main.grnd_level}</div>
              </div>
            </div>
          </WeatherCard>
        </ul>
      )}
    </div>
  );
}
