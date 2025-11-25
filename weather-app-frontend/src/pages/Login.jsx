import Header from "../components/Header";
import Footer from "../components/Footer";
import FormLogin from "../components/FormLogin";
import "../styles/Login.css";

function Login() {
  return (
    <>
      <Header />
      <div className="main-content">
        <h1 className="login-page-title">Inicia sesión</h1>
        <FormLogin />
      </div>
      <Footer />
    </>
  );
}

export default Login;
