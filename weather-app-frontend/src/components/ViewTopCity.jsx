import { useEffect, useState } from "react";
import { fetchGeneric } from "../helpers/fetchGeneric";
import CityInTopList from "./CityInTopList";

function ViewTopCity() {
    const [top, setTop] = useState(null);
    const [error, setError] = useState({state: false, message: ""});

    const urlTopCity = "http://localhost:3000/api/city/";

    useEffect(() => {
      fetchTopCity();
    
    }, []);

    const fetchTopCity = async () =>{
        try {
            const data = await fetchGeneric(urlTopCity, "GET", {
              "Content-Type": "application/json",
            });
      
            if (data == null) {
              throw new Error("Error al cargar el top de ciudades");
            }
            setTop(data);
            setError({ state: false, message: "" });
          } catch (error) {
            console.log(error);
            setError({ state: true, message: "Error al cargar el top de las ciudades" });
          }
    }
    

    return ( 
        <>
            {top.forEach(city => {
              <CityInTopList data={city}/>
            })}
            {error.state && <p>{error.message}</p>}
        </>
     );
}

export default ViewTopCity;