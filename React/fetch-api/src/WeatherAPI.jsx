import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Import Bootstrap CSS

const WeatherAPI = () => {
  const [city, setCity] = useState("vijayawada");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = "bca28409be0eb50d8334dde12aefaa8d";

  // Fetch weather by city
  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name!");
      setWeatherData(null);
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("City not found");
        return response.json();
      })
      .then((data) => setWeatherData(data))
      .catch((error) => setError(error.message));
  };
  const getWeatherImage = (main) => {
    switch (main.toLowerCase()) {
      case "clear":
        return "https://cdn-icons-png.flaticon.com/512/6974/6974833.png"; // sunny
      case "clouds":
        return "https://cdn-icons-png.flaticon.com/512/414/414825.png"; // cloudy
      case "rain":
        return "https://cdn-icons-png.flaticon.com/512/4150/4150897.png"; // rainy
      case "drizzle":
        return "https://cdn-icons-png.flaticon.com/512/3076/3076129.png"; // drizzle
      case "thunderstorm":
        return "https://cdn-icons-png.flaticon.com/512/1146/1146860.png"; // thunderstorm
      case "snow":
        return "https://cdn-icons-png.flaticon.com/512/642/642102.png"; // snow
      case "mist":
      case "fog":
      case "haze":
        return "https://cdn-icons-png.flaticon.com/512/4005/4005901.png"; // mist
      default:
        return "https://cdn-icons-png.flaticon.com/512/1163/1163661.png"; // default
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4 text-primary fw-bold"> Weather Search App</h1>

      {/* Search Input */}
      <div className="input-group mb-4 w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-danger" onClick={fetchWeather}>
          Search
        </button>
      </div>

      {/* Error Message */}
      {error && <div className="alert alert-danger w-50 mx-auto">{error}</div>}

      {/* Weather Card */}
      {weatherData && (
        <div className="card shadow-lg mx-auto p-3" style={{ width: "22rem" }}>
          <h3 className="card-title mt-2">{weatherData.name}</h3>
          <img
            src={getWeatherImage(weatherData.weather[0].main)}
            alt="Weather"
            className="card-img-top mx-auto"
            style={{ width: "120px", height: "120px" }}
          />
          <div className="card-body">
            <h5 className="card-subtitle mb-2 text-muted">
              {weatherData.weather[0].main} (
              {weatherData.weather[0].description})
            </h5>
            <ul className="list-group list-group-flush mt-3">
              <li className="list-group-item">
                Temperature: {(weatherData.main.temp - 273.15).toFixed(2)} °C
              </li>
              <li className="list-group-item">
                Humidity: {weatherData.main.humidity}%
              </li>
              <li className="list-group-item">
                Wind Speed: {weatherData.wind.speed} m/s
              </li>
            </ul>
          </div>
        </div>
      )}

      {!weatherData && !error && (
        <p className="text-secondary">Enter a city name to get weather info.</p>
      )}
    </div>
  );
};

export default WeatherAPI;
