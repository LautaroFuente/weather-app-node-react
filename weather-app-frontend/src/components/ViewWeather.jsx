function ViewWeather({weather}) {

    return ( <>
        <h1>Clima</h1>
        { weather != null ? 
            <p>{weather}</p>
        :
            <p>Busca una ciudad para ver su clima</p>}
    </> );
}

export default ViewWeather;