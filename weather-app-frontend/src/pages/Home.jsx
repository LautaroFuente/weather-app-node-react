import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { FormWeather } from "../components/FormWeather"
import { ViewWeather } from "../components/ViewWeather"

function Home() {
    return ( 
        <>
            <Header />
            <h1>Busca el clima</h1>
            <FormWeather />
            <ViewWeather />
            <Footer />        
        </>
     );
}

export default Home;