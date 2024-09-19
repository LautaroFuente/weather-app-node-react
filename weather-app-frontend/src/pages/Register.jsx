import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { FormRegister } from "../components/FormRegister"

function Register() {
    return ( 
        <>
            <Header />
            <h1>Registrate</h1>
            <FormRegister />
            <Footer />        
        </>
     );
}

export default Register;