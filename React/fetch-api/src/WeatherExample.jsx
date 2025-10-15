import React, { useEffect } from "react";

const Weather = () => {
  const [data, setData] = React.useState(null);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Vijayawada&units=metric&appid=c4577db0d5fe148160ce42be470cc038"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div>Weather</div>
      <h1>{data && data.name}</h1>
      <h2>{data && data.main.temp}</h2>
      <h2>{data && data.weather[0].description}</h2>
      <h2>{data && data.weather[0].main}</h2>
    </>
  );
};

export default Weather;