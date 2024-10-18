import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext.jsx"

function Header() {

    const { stateUser, dispatchUser } = useContext(UserContext) || {};
    const { token } = stateUser || {};

    const closeSession = () => {
        dispatchUser({ type: "RESET"});
    }

    return ( 
        <nav>
            <ul className='menu'>
                <li><NavLink to="/">Buscar clima</NavLink></li>
                <li><NavLink to="/history">Historial</NavLink></li>
                <li><NavLink to="/city-top">Mas buscadas</NavLink></li>
            </ul>
            <div className='btn-session'>
                {token ? <button onClick={closeSession}>Cerrar Sesion</button> 
                :<div className='no-session'>
                    <NavLink to="/register">Registrarse</NavLink>
                    <NavLink to="/login">Iniciar Sesion</NavLink>
                </div>}
            </div>
        </nav>
  
     );
}

export default Header;