import dotenv from "dotenv";

dotenv.config();

export const searchWeather = async (req, res) =>{
    try {
        const { city, country } = req.params;
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.API_KEY}&units=metric`);
    
        res.status(200).json(data);
    } catch (e) {
        console.log(e);
        throw new Error("Error al realizar la busqueda");
    }
};
