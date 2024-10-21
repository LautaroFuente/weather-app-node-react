import { formatDate } from "../helpers/formatDate";

function OneWeatherFromHistory({weather}) {   

    return ( 
        <>
            <div className="container-one-history">
                {weather.city_name} || {formatDate(weather.search_time)}
            </div>
        </>
     );
}

export default OneWeatherFromHistory;