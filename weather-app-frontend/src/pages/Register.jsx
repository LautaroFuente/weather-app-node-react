import Header from "../components/Header";
import Footer from "../components/Footer";
import FormRegister from "../components/FormRegister";
import "../styles/Register.css";

function Register() {
  return (
    <>
      <Header />
      <div className="main-content">
        <h1 className="page-title">Registrate</h1>
        <FormRegister />
      </div>
      <Footer />
    </>
  );
}

export default Register;
