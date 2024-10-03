import { useState } from "react";
import { useForm } from "../hooks/useForm";
import ErrorMessage from "./ErrorMessage";
import { userSchema } from "../schemas/userSchema";
import { useNavigate } from "react-router";
import { fetchGeneric } from "../helpers/fetchGeneric";

const initialForm = {
    username: "",
    email: "",
    password: "",
}

const urlRegister = "";

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
        if(result.success){
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
                  throw new Error("Error al agregar");
                }
                if (data == "Error ya registrado") {
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
                if(error.message == "Error ya registrado") {
                  setFormErrorServer(error.message);
                } else {
                  setFormErrorServer("Error con el servidor");
                }
              }            
        }else{
            console.log("Error de validacion");
            console.log(`Falla validacion `);
            const errors = result.error.errors;
            errors.forEach((error) => {
            handleErrorForm(error.path, error.message);
            });
        }

    }

    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Nombre de usuario</label>
                <input type="text" value={form.username} onChange={handleInputChange} name="username" id="username"/>
                {errorForm.username && <ErrorMessage message={errorForm.username}></ErrorMessage>}
                <label htmlFor="email">Email</label>
                <input type="text" value={form.username} onChange={handleInputChange} name="email" id="email"/>
                {errorForm.email && <ErrorMessage message={errorForm.email}></ErrorMessage>}
                <label htmlFor="password">Contraseña</label>
                <input type="text" value={form.password} onChange={handleInputChange} name="password" id="password"/>
                {errorForm.password && <ErrorMessage message={errorForm.password}></ErrorMessage>}
                <button type="submit">Registrarse</button>
            </form>
            {formErrorServer && <ErrorMessage message={formErrorServer}></ErrorMessage>}
        </>
     );
}

export default FormRegister;