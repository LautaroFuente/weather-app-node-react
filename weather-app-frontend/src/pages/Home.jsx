import Header from "../components/Header";
import Footer from "../components/Footer";
import FormWeather from "../components/FormWeather";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

function Home() {
  const { stateUser } = useContext(UserContext) || {};

  const { username, token } = stateUser || {};
  return (
    <>
      <Header />
      <h1>Busca el clima</h1>
      {token && <h3>Bienvenido: {username}</h3>}
      <FormWeather />
      <Footer />
    </>
  );
}

export default Home;
/**
-Actualizar ciudades buscadas error
-Iniciar sesion
-Registrarse
-Top ciudades
-Historial busqueda
-Actualizar historial
 */
