import Header from "../components/Header"
import Footer from "../components/Footer"
import FormLogin from "../components/FormLogin"

function Login() {
    return ( 
        <>
            <Header />
            <h1>Inicia sesion</h1>
            <FormLogin />
            <Footer />            
        </>
     );
}

export default Login;