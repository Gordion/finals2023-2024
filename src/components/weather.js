import React, { useState, useEffect } from "react";

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "f7772acfaaf77a0d84cab2ae1e44c0b5";
  const city = "Ivano-Frankove"; // Replace with the desired city

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
        } else {
          throw new Error("Network response was not ok.");
        }
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
      }
    };

    fetchData();
  }, [apiKey, city]);

  return (
    <section className="weather">
      <p>Івано-Франкове</p>
      <div className="weather-box">
        {weatherData && (
          <>
            {weatherData.weather && weatherData.weather[0] && (
              <img
                className="weather-image"
                src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                alt={weatherData.weather[0].description}
              />
            )}
            <div className="temperature">
              <h2>
                {weatherData &&
                  weatherData.main &&
                  Math.round(weatherData.main.temp)}
              </h2>
              <p>°C</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default WeatherComponent;
