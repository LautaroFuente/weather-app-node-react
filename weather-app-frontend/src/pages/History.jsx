import Header from "../components/Header"
import Footer from "../components/Footer"
import ViewHistory from "../components/ViewHistory"
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { NavLink } from 'react-router-dom';

function History() {

    const {stateUser} = useContext(UserContext);
    const { token } = stateUser;

    return ( 
        <>
            <Header />
            {token ? 
                <div>
                    <h1>Tu historial de busqueda</h1>
                    <ViewHistory />
                </div> 
                : 
                <div>
                    <h1>Debes iniciar sesion</h1>
                    <NavLink to="/login"></NavLink>
                </div>}
            <Footer />
        </>
     );
}

export default History;