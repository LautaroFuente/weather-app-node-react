import dotenv from "dotenv";

dotenv.config();

export const searchWeather = async (req, res) =>{
    try {
        const { city, country } = req.params;
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=es&appid=${process.env.API_KEY}&units=metric`);
        let response = await data.json();
        console.log(response);
        res.status(200).json(response);
    } catch (e) {
        console.log(e);
        throw new Error("Error al realizar la busqueda");
    }
};
