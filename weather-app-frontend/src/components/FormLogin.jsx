import { useForm } from "../hooks/useForm";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { fetchGeneric } from "../helpers/fetchGeneric";
import ErrorMessage from "./ErrorMessage";
import { loginUserSchema } from "../schemas/userSchema";
import { UserContext } from "../contexts/UserContext";

const initialForm = {
    email: "",
    password: "",
}

const urlLogin = "";

function FormLogin() {

    const [formErrorServer, setFormErrorServer] = useState("");
    const [userNotRegistered, setUserNotRegistered] = useState({state :false, message: ""});
    const navigate = useNavigate();
    const { dispatchUser } = useContext(UserContext);

    const {
        form,
        errorForm,
        handleInputChange,
        handleErrorForm,
        resetForm,
        resetErrorForm,
    } = useForm(initialForm);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = loginUserSchema.safeParse(form);
        if(result.success){
            try {
                console.log(`Validacion correcta`);
                const data = await fetchGeneric(
                  urlLogin,
                  "POST",
                  {
                    "Content-Type": "application/json",
                  },
                  JSON.stringify(form)
                );
        
                if (data == null) {
                  throw new Error("Error al iniciar sesion");
                }

                const { token, user } = data;
            if (data.error) {
                setUserNotRegistered({ state: true, message: data.error });
            } else {
                console.log("Inicio de sesion exitoso");
                dispatchUser({
                    type:"SET_USER",
                    payload:{
                        id: user[0].id,
                        username: user[0].username,
                        email: user[0].email,
                        token,
                    }
                })
            }    
                console.log("iniciar sesion con exito:");
                resetForm();
                resetErrorForm();
                navigate("/");
              } catch (error) {
                console.error(error.message);
                resetForm();
                resetErrorForm();
                setFormErrorServer("Error con el servidor");
              }            
        }else{
            console.log("Error de validacion");
            const errors = result.error.errors;
            errors.forEach((error) => {
            handleErrorForm(error.path, error.message);
            });
        }

    }

    return ( 
        <>
            {userNotRegistered.state && (
                <ErrorMessage message={userNotRegistered.message}></ErrorMessage>
            )}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" value={form.email} onChange={handleInputChange} name="email" id="email"/>
                {errorForm.email && <ErrorMessage message={errorForm.email}></ErrorMessage>}
                <label htmlFor="password">Contraseña</label>
                <input type="text" value={form.password} onChange={handleInputChange} name="password" id="password"/>
                {errorForm.password && <ErrorMessage message={errorForm.password}></ErrorMessage>}
                <button type="submit">Ingresar</button>
            </form>
            {formErrorServer && <ErrorMessage message={formErrorServer}></ErrorMessage>}
        </>
     );
}

export default FormLogin;