import { useEffect, useState } from "react";
import { fetchGeneric } from "../helpers/fetchGeneric";

function ViewTopCity() {
    const [top, setTop] = useState(null);
    const [error, setError] = useState({state: false, message: ""});

    const urlTopCity = "";

    useEffect(() => {
      fetchTopCity();
    
    }, []);

    const fetchTopCity = async () =>{
        try {
            const data = await fetchGeneric(urlTopCity, "GET", {
              "Content-Type": "application/json",
            });
      
            if (data == null) {
              throw new Error("Error al cargar el top de climas");
            }
            setTop(data);
            setError({ state: false, message: "" });
          } catch (error) {
            console.log(error);
            setError({ state: true, message: "Error al cargar el top de los climas" });
          }
    }
    

    return ( 
        <>
            <div>{top}</div>
            {error.state && <p>{error.message}</p>}
        </>
     );
}

export default ViewTopCity;