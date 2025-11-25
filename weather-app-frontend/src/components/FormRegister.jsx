import { useState } from "react";
import { useForm } from "../hooks/useForm";
import ErrorMessage from "./ErrorMessage";
import { userSchema } from "../schemas/userSchema";
import { useNavigate } from "react-router";
import { fetchGeneric } from "../helpers/fetchGeneric";
import "../styles/FormRegister.css";

const initialForm = {
  username: "",
  email: "",
  password: "",
};

const urlRegister = "http://localhost:3000/api/user";

function FormRegister() {
  const {
    form,
    errorForm,
    handleInputChange,
    handleErrorForm,
    resetForm,
    resetErrorForm,
  } = useForm(initialForm);

  const [formErrorServer, setFormErrorServer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = userSchema.safeParse(form);
    if (result.success) {
      try {
        console.log(`Validacion correcta`);
        const data = await fetchGeneric(
          urlRegister,
          "POST",
          {
            "Content-Type": "application/json",
          },
          JSON.stringify(form)
        );

        if (data == null) {
          throw new Error("Error al registar");
        }
        if (data == "Error") {
          throw new Error("Error ya registrado");
        }

        console.log("Agregado con exito:", data);
        resetForm();
        resetErrorForm();
        navigate("/login");
      } catch (error) {
        console.error(error.message);
        resetForm();
        resetErrorForm();
        if (error.message == "Error ya registrado") {
          setFormErrorServer(error.message);
        } else {
          setFormErrorServer("Error con el servidor");
        }
      }
    } else {
      console.log("Error de validacion");
      const errors = result.error.errors;
      errors.forEach((error) => {
        handleErrorForm(error.path, error.message);
      });
    }
  };

  return (
    <>
      {formErrorServer && <ErrorMessage message={formErrorServer} />}

      <form className="form form-register" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="username">Nombre de usuario</label>
          <input
            type="text"
            value={form.username}
            onChange={handleInputChange}
            name="username"
            id="username"
            required
          />
        </div>
        {errorForm.username && <ErrorMessage message={errorForm.username} />}

        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={form.email}
            onChange={handleInputChange}
            name="email"
            id="email"
            required
          />
        </div>
        {errorForm.email && <ErrorMessage message={errorForm.email} />}

        <div className="form-row">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            value={form.password}
            onChange={handleInputChange}
            name="password"
            id="password"
            required
          />
        </div>
        {errorForm.password && <ErrorMessage message={errorForm.password} />}

        <div className="form-row">
          <button type="submit">Registrarse</button>
        </div>
      </form>
    </>
  );
}

export default FormRegister;
