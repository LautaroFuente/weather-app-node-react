import { useContext, useEffect, useState } from "react";
import { fetchGeneric } from "../helpers/fetchGeneric";
import { UserContext } from "../contexts/UserContext";

function ViewHistory() {
    const [history, setHistory] = useState(null);
    const [error, setError] = useState({state: false, message: ""});

    const {stateUser} = useContext(UserContext);

    const { token } = stateUser;

    const urlHistory = "http://localhost:3000/api/weather/";

    useEffect(() => {
      fetchHistory();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchHistory = async () =>{
        try {
            const data = await fetchGeneric(urlHistory, "GET", {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            });
      
            if (data == null) {
              throw new Error("Error al cargar el historial del usuario");
            }
            setHistory(data);
            setError({ state: false, message: "" });
          } catch (error) {
            console.log(error);
            setError({ state: true, message: "Error al cargar el historial del usuario" });
          }
    }
    

    return ( 
        <>
            {history.forEach(weather => {
              <div>{weather}</div>
            })}
            {error.state && <p>{error.message}</p>}
        </>
     );
}

export default ViewHistory;