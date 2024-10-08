import { useForm } from "../hooks/useForm";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { citySearchSchema } from "../schemas/citySearchSchema";
import { ViewWeather } from "../components/ViewWeather";
import { fetchGeneric } from "../helpers/fetchGeneric";

const initialForm = {
    city: "",
    country: "",
}

const urlSearch = "";

function  FormWeather() {

    const [formErrorServer, setFormErrorServer] = useState("");
    const [weather, setWeather] = useState(null);

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
        const result = citySearchSchema.safeParse(form);
        if(result.success){
            try {
                console.log(`Validacion correcta`);
                const data = await fetchGeneric(
                    urlSearch,
                    "POST",
                    {
                      "Content-Type": "application/json",
                    },
                    JSON.stringify(form)
                  );
          
                  if (data == null) {
                    throw new Error("Error al realizar la busqueda");
                  }
                setWeather(data);
                console.log(data);
                resetForm();
                resetErrorForm();
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
        <form onSubmit={handleSubmit}>
            <label htmlFor="city">Ciudad</label>
            <input type="text" value={form.city} onChange={handleInputChange} name="city" id="city"/>
            {errorForm.email && <ErrorMessage message={errorForm.email}></ErrorMessage>}
            <label htmlFor="country">Pais</label>
            <input type="text" value={form.country} onChange={handleInputChange} name="country" id="country"/>
            {errorForm.email && <ErrorMessage message={errorForm.email}></ErrorMessage>}
            <button type="submit">Buscar</button>
        </form>
        {formErrorServer && <ErrorMessage message={formErrorServer}></ErrorMessage>}
        <ViewWeather weather={weather} />
    </>
     );
}

export default FormWeather;