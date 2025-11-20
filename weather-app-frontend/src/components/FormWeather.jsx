import { useForm } from "../hooks/useForm";
import { useContext, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { citySearchSchema } from "../schemas/citySearchSchema";
import ViewWeather from "../components/ViewWeather";
import { fetchGeneric } from "../helpers/fetchGeneric";
import { UserContext } from "../contexts/UserContext";

const initialForm = {
  city: "",
  country: "",
};

const urlSearch = "http://localhost:3000/api/search/";
const urlUpdateSearchUser = "http://localhost:3000/api/weather/";
const urlUpdateCityTop = "http://localhost:3000/api/city/";

function FormWeather() {
  const { stateUser } = useContext(UserContext) || {};
  const { token, id } = stateUser || {};

  const [formErrorServer, setFormErrorServer] = useState("");
  const [weather, setWeather] = useState(null);
  const [lastCountry, setLastCountry] = useState("");

  const {
    form,
    errorForm,
    handleInputChange,
    handleErrorForm,
    resetForm,
    resetErrorForm,
  } = useForm(initialForm);

  const updateSearchsForUser = async (city_name) => {
    try {
      const data = await fetchGeneric(
        urlUpdateSearchUser,
        "POST",
        {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        JSON.stringify({ user_id: id, city_name })
      );

      if (data == null) {
        throw new Error("Error al actualizar busquedas del usuario");
      }
    } catch (error) {
      console.error(error.message);
      setFormErrorServer(
        "Error con el servidor al actualizar busquedas de usuario"
      );
    }
  };

  const updateCityTop = async (city_name) => {
    try {
      const data = await fetchGeneric(
        urlUpdateCityTop,
        "POST",
        {
          "Content-Type": "application/json",
        },
        JSON.stringify({ city_name })
      );

      if (data == null) {
        throw new Error("Error al actualizar las ciudades");
      }
    } catch (error) {
      console.error(error.message);
      setFormErrorServer("Error con el servidor al actualizar las ciudades");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = citySearchSchema.safeParse(form);
    if (result.success) {
      try {
        console.log(`Validacion correcta`);
        const data = await fetchGeneric(
          `${urlSearch}${form.city}/${form.country}`,
          "GET",
          {
            "Content-Type": "application/json",
          },
          JSON.stringify(form)
        );
        console.log(data.location);
        console.log(data);
        if (data == null) {
          throw new Error("Error al realizar la busqueda");
        }
        updateCityTop(data.location);
        if (token) {
          updateSearchsForUser(data.location);
        }
        setWeather(data);
        setLastCountry(form.country);
        resetForm();
        resetErrorForm();
      } catch (error) {
        console.error(error.message);
        resetForm();
        resetErrorForm();
        setFormErrorServer("Error con el servidor");
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
      <form className="form form-search-weather" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="city">Ciudad</label>
          <input
            type="text"
            value={form.city}
            onChange={handleInputChange}
            name="city"
            id="city"
            required
          />
        </div>
        {errorForm.email && (
          <ErrorMessage message={errorForm.email}></ErrorMessage>
        )}
        <div className="form-row">
          <label htmlFor="country">Pais</label>
          <input
            type="text"
            value={form.country}
            onChange={handleInputChange}
            name="country"
            id="country"
            required
          />
        </div>
        {errorForm.email && (
          <ErrorMessage message={errorForm.email}></ErrorMessage>
        )}
        <div className="form-row">
          <button type="submit">Buscar</button>
        </div>
      </form>
      {formErrorServer && (
        <ErrorMessage message={formErrorServer}></ErrorMessage>
      )}
      <ViewWeather weather={weather} country={lastCountry} />
    </>
  );
}

export default FormWeather;
