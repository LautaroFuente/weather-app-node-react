import { selectImage } from "../helpers/selectImage";
import "../styles/ViewWeather.css";

function ViewWeather({ weather, country }) {
  return (
    <div className="view-weather">
      <h1 className="weather-title">Clima</h1>

      {weather ? (
        <div className="weather-card">
          <h3 className="location">{weather.location}</h3>
          <h4 className="country">{country}</h4>

          <div className="container-image">
            <img src={selectImage(weather.current.description)} alt="Clima" />
          </div>

          <h3 className="description">Clima: {weather.current.description}</h3>
          <h3 className="temp">Temperatura: {weather.current.temp} °C</h3>

          <h4 className="minmax">
            Min: {weather.daily.min} °C | Max: {weather.daily.max} °C
          </h4>
        </div>
      ) : (
        <p className="weather-empty">Busca una ciudad para ver su clima</p>
      )}
    </div>
  );
}

export default ViewWeather;
