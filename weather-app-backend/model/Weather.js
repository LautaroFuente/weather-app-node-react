import pool from "../configuration/DatabaseConnection.js";

const weather = {
  getWeatherFromOneUser: async (email) => {
    try {
      const query =
        "SELECT w.id, u.username, w.city_name, w.search_time FROM weather w INNER JOIN user u ON(w.user_id = u.id) WHERE u.email = ?;";
      const [result] = await pool.execute(query, [email]);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error("Error al conseguir los climas buscados del usuario");
    }
  },

  addWeatherFromOneUser: async (user_id, city_name, search_time) => {
    try {
      const search_time = new Date();
      const searchTime = search_time
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");

      const query =
        "INSERT INTO weather (id, user_id, city_name, search_time) VALUES (0, ?, ?, ?);";
      const [result] = await pool.execute(query, [
        user_id,
        city_name,
        searchTime,
      ]);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error("Error al agregar clima buscado al usuario");
    }
  },
};

export default weather;
