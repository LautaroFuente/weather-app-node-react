import weather from "../model/Weather";

export const getWeatherFromOneUser = async (req, res) =>{
    try {
        const { email } = req.params;
    
        //validar dato
        if (result.success) {
          console.log("Validacion correcta");
          let data = await weather.getWeatherFromOneUser(email);
    
          res.status(200).json(data);
        } else {
          console.error("Errores de validacion", result.error.errors);
          res.status(400).json({ errors: result.error.format() });
        }
    } catch (e) {
        console.log(e);
        throw new Error("Error los climas buscados del usuario");
    }
};

export const addWeatherFromOneUser = async (req, res) =>{
    try {
        const { user_id, city_name, search_time } = req.body;
        //validar datos
        if (result.success) {
            console.log("Validacion correcta");

            let data = await weather.addWeatherFromOneUser(user_id, city_name, search_time);
    
            res.status(201).json(data);
        } else {
          console.error("Errores de validacion", result.error.errors);
          res.status(400).json({ errors: result.error.format() });
        }
    } catch (e) {
        console.log(e);
        throw new Error("Error al crear el clima buscado del usuario");
    }
};
