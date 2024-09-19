import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { ViewHistory } from "../components/ViewHistory"

function History() {
    return ( 
        <>
            <Header />
            <h1>Tu historial de busqueda</h1>
            <ViewHistory />
            <Footer />
        </>
     );
}

export default History;