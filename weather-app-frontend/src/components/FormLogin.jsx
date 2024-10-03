import { useForm } from "../hooks/useForm";

const initialForm = {
    username: "",
    email: "",
    password: "",
}

function FormLogin() {
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
                <label htmlFor="email">Email</label>
                <input type="text" />
                <label htmlFor="password">Contraseña</label>
                <input type="text" />
                <button type="submit">Ingresar</button>
            </form>
        </>
     );
}

export default FormLogin;