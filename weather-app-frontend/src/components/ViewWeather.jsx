import { fetchWeatherApi } from 'openmeteo';
import { useEffect } from 'react';

const params = {
	"latitude": 52.52,
	"longitude": 13.41,
	"hourly": "temperature_2m"
};
const url = "https://api.open-meteo.com/v1/forecast";

function ViewWeather() {

    const fetchWeather = async () =>{
        const responses = await fetchWeatherApi(url, params);
        console.log(responses);
    }

    useEffect(() => {
      fetchWeather();
    
    }, [])
    

    return ( <>
        <h1>Clima</h1>
    </> );
}

export default ViewWeather;