import Header from "../components/Header";
import Footer from "../components/Footer";
import FormRegister from "../components/FormRegister";
import "../styles/Register.css";

function Register() {
  return (
    <>
      <Header />
      <h1 className="page-title">Registrate</h1>
      <FormRegister />
      <Footer />
    </>
  );
}

export default Register;
