import Header from "../components/Header";
import Footer from "../components/Footer";
import ViewTopCity from "../components/ViewTopCity";
import "../styles/CityTop.css";

function CityTop() {
  return (
    <>
      <Header />
      <div className="citytop-container main-content">
        <h1>Ciudades más buscadas</h1>
        <ViewTopCity />
      </div>
      <Footer />
    </>
  );
}

export default CityTop;
