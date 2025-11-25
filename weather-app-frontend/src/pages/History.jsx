import Header from "../components/Header";
import Footer from "../components/Footer";
import ViewHistory from "../components/ViewHistory";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { NavLink } from "react-router-dom";
import "../styles/History.css";

function History() {
  const { stateUser } = useContext(UserContext) || {};
  const { token } = stateUser || {};

  return (
    <>
      <Header />
      {token ? (
        <div className="history-page main-content">
          <h1>Tu historial de busqueda</h1>
          <ViewHistory />
        </div>
      ) : (
        <div className="history-page main-content">
          <h1 className="history-login-warning">Debes iniciar sesion</h1>
          <NavLink to="/login"></NavLink>
        </div>
      )}
      <Footer />
    </>
  );
}

export default History;
