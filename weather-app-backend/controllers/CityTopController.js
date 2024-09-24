import cityTop from "../model/CityTop";

export const getTop = async (req, res) =>{
    try {
        let data = await cityTop.getTop();
    
        res.status(200).json(data);
    } catch (e) {
        console.log(e);
        throw new Error("Error al cargar el top de ciudades");
    }
};

export const getOneCity = async (req, res) =>{
    try {
        const { city_name } = req.params;
    
        //validar dato
        if (result.success) {
          console.log("Validacion correcta");
          let data = await cityTop.getOneCity(city_name);
    
          res.status(200).json(data);
        } else {
          console.error("Errores de validacion", result.error.errors);
          res.status(400).json({ errors: result.error.format() });
        }
    } catch (e) {
        console.log(e);
        throw new Error("Error al cargar la ciudad");
    }
};

export const addCity = async (req, res) =>{
    try {
        const { city_name } = req.body;
        //validar dato
        if (result.success) {
          console.log("Validacion correcta");
          let cityExist = await cityTop.getOneCity(city_name);
          if (cityExist.length > 0) {
            res.status(409).json({ errors: "ciudad ya registrada" });
          } else {
            let data = await cityTop.addCity(city_name);
    
            res.status(201).json(data);
          }
        } else {
          console.error("Errores de validacion", result.error.errors);
          res.status(400).json({ errors: result.error.format() });
        }
    } catch (e) {
        console.log(e);
        throw new Error("Error al crear la ciudad");
    }
};
