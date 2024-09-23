import { connection } from "../configuration/DatabaseConnection";

const weather = {
    getWeatherFromOneUser: async (email) =>{
        try {
            const query = "SELECT u.username, w.city_name, w.search_time FROM Weather w INNER JOIN User u ON(w.user_id = u.id) WHERE u.email = ?;";
            const [result] = await connection.execute(query, [email]);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error("Error al conseguir los climas buscados del usuario");
        }
    }
}

export default weather;