function ViewWeather({weather}) {

    return ( 
        <>
            <h1>Clima</h1>
            {weather != null ? (
                <div>
                    <h3>{weather.name}</h3>
                    <h4>{weather.sys.country}</h4>
                    <h3>Clima: {weather.weather[0].description}</h3>
                    <h3>Temperatura: {weather.main.temp} °C</h3>
                    <h4>Min: {weather.main.temp_min} °C | Max: {weather.main.temp_max} °C</h4>
                </div>
            ) : (
                <p>Busca una ciudad para ver su clima</p>
            )}
        </>
    );
}

export default ViewWeather;