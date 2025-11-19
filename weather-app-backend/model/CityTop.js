import pool from "../configuration/DatabaseConnection.js";

const cityTop = {
  getTop: async () => {
    try {
      const [result] = await pool.query(
        "SELECT city_name, search_count FROM citytop ORDER BY search_count DESC;"
      );
      return result;
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener el top de ciudades");
    }
  },

  getOneCity: async (city_name) => {
    try {
      const query = "SELECT city_name FROM citytop WHERE city_name = ?;";
      const [result] = await pool.execute(query, [city_name]);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener la ciudad");
    }
  },

  addCity: async (city_name) => {
    try {
      const query =
        "INSERT INTO citytop (city_name, search_count) VALUES (?, 1);";
      const [result] = await pool.execute(query, [city_name]);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error("Error al agregar la ciudad");
    }
  },

  updateCountCity: async (city_name) => {
    try {
      const query =
        "UPDATE citytop SET search_count = search_count + 1 WHERE city_name = ?;";
      const [result] = await pool.execute(query, [city_name]);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error("Error al actualizar contador de la ciudad");
    }
  },
};

export default cityTop;
