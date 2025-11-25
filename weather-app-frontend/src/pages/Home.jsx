import Header from "../components/Header";
import Footer from "../components/Footer";
import FormWeather from "../components/FormWeather";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import "../styles/Home.css";

function Home() {
  const { stateUser } = useContext(UserContext) || {};

  const { username, token } = stateUser || {};
  return (
    <>
      <Header />
      <div className="home-container">
        <h1>Busca el clima</h1>
        {token && <h3>Bienvenido: {username}</h3>}
        <FormWeather />
      </div>
      <Footer />
    </>
  );
}

export default Home;
