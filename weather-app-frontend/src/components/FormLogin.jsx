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

const urlLogin = "http://localhost:3000/api/auth";

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
                const response = await fetchGeneric(
                  urlLogin,
                  "POST",
                  {
                    "Content-Type": "application/json",
                  },
                  JSON.stringify(form)
                );
        
                if (response == null) {
                  throw new Error("Error al iniciar sesion");
                }
                
                const { token, data } = response;
            if (data.status === 404) {
                setUserNotRegistered({ state: true, message: data.error });
            } else {
                console.log("Inicio de sesion exitoso");
                dispatchUser({
                    type:"SET_USER",
                    payload:{
                        id: data[0].id,
                        username: data[0].username,
                        email: data[0].email,
                        token,
                    }
                })
            }    
                console.log("iniciar sesion con exito:");
                resetForm();
                resetErrorForm();
                navigate("/");
              } catch (error) {
                console.log(error.message);
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
            <form className="form form-login" onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <input type="text" value={form.email} onChange={handleInputChange} name="email" id="email" required/>
                </div>    
                {errorForm.email && <ErrorMessage message={errorForm.email}></ErrorMessage>}
                <div className="form-row">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" value={form.password} onChange={handleInputChange} name="password" id="password" required/>
                </div>    
                {errorForm.password && <ErrorMessage message={errorForm.password}></ErrorMessage>}
                <div className="form-row">
                    <button type="submit">Ingresar</button>
                </div>    
            </form>
            {formErrorServer && <ErrorMessage message={formErrorServer}></ErrorMessage>}
        </>
     );
}

export default FormLogin;