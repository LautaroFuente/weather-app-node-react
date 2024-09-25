import { useState } from "react";
import { useForm } from "../hooks/useForm";

const initialForm = {
    username: "",
    email: "",
    password: "",
}

function FormRegister() {
    const {
        form,
        errorForm,
        handleInputChange,
        handleErrorForm,
        resetForm,
        resetErrorForm,
    } = useForm(initialForm);
    return ( 
        <>
            <form action="">
                <label htmlFor="username">Nombre de usuario</label>
                <input type="text" value={form.username} onChange={handleInputChange} name="username" id="username"/>
                <label htmlFor="email">Email</label>
                <input type="text" value={form.username} onChange={handleInputChange} name="email" id="email"/>
                <label htmlFor="password">Contraseña</label>
                <input type="text" value={form.username} onChange={handleInputChange} name="password" id="password"/>
                <button type="submit">Registrarse</button>
            </form>
        </>
     );
}

export default FormRegister;