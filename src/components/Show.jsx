import PropTypes from "prop-types";
import "../css/Show.css";

const Show = ({ data }) => {
  const colorTemperature = (num) => {
    if (num <= 20) return "blue";
    if (num > 20 && num <= 30) return "amarillo";
    return "red"; // num > 30
  };

  return (
    <div className="weather-container">
      <div className="container-header">
        <h1>
          {data.location.name}, {data.location.region}, {data.location.country}
        </h1>
        <h2>{data.location.localtime}</h2>
      </div>

      <div className="container-body">
        <img src={data.current.weather_icons} alt="Imagen de la temperatura" />
        <div className="weather-details">
          <h3>Clima Actual:</h3>
          <p className={colorTemperature(data.current.temperature)}>
            Temperatura: {data.current.temperature}°C
          </p>
          <p className={colorTemperature(data.current.feelslike)}>
            Sensación térmica: {data.current.feelslike}°C
          </p>
          <p>Humedad: {data.current.humidity}%</p>
          <p>Cobertura de nubes: {data.current.cloudcover}%</p>
          <p>Índice UV: {data.current.uv_index}</p>
        </div>

        <div className="wind-details">
          <h3>Viento:</h3>
          <p>Velocidad: {data.current.wind_speed} km/h</p>
          <p>Dirección: {data.current.wind_dir}</p>
          <p>Grado: {data.current.wind_degree}°</p>
        </div>
      </div>
    </div>
  );
};

Show.propTypes = {
  data: PropTypes.object,
};

export default Show;
