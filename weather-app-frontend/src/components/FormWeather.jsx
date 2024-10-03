import { useForm } from "../hooks/useForm";

const initialForm = {
    city_name: "",
    country: "",
}

function  FormWeather() {
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
            <label htmlFor="">Buscar</label>
            <input type="text" />
        </form>
    </>
     );
}

export default FormWeather;