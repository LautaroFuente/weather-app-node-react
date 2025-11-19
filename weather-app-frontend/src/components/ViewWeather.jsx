import { selectImage } from "../helpers/selectImage";

function ViewWeather({ weather, country }) {
  return (
    <>
      <h1>Clima</h1>
      {weather != null ? (
        <div>
          <h3>{weather.location}</h3>
          <h4>{country}</h4>
          <div className="container-image">
            <img src={selectImage(weather.current.description)} alt="Clima" />
          </div>
          <h3>Clima: {weather.current.description}</h3>
          <h3>Temperatura: {weather.current.temp} °C</h3>
          <h4>
            Min: {weather.daily.min} °C | Max: {weather.daily.max} °C
          </h4>
        </div>
      ) : (
        <p>Busca una ciudad para ver su clima</p>
      )}
    </>
  );
}

export default ViewWeather;
