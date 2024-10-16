import Header from "../components/Header"
import Footer from "../components/Footer"
import ViewTopCity from "../components/ViewTopCity"

function CityTop() {
    return ( 
        <>
            <Header />
            <h1>Ciudades mas buscadas</h1>
            <ViewTopCity />
            <Footer />
        </>
     );
}

export default CityTop;