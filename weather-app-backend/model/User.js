import { connection } from "../configuration/DatabaseConnection";
import bcrypt from "bcrypt";

const user = {

    getAllUsers: async () =>{
        try {
            const [result] = await connection.query(
                "SELECT id, username, email FROM User ORDER BY id;"
            );
            return result;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener todos los usuarios");
        }
    },
    
    getOneUser: async (email) =>{
        try {
            const query = "SELECT id, username, email FROM User WHERE email = ?;";
            const [result] = await connection.execute(query, [email]);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener el usuario");
        }
    },

    getPasswordFromOneUser: async (email) =>{
        try {
            const query = "SELECT password FROM User WHERE email = ?;";
            const [result] = await connection.execute(query, [email]);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener la contraseña del usuario");
        }
    },

    addUser: async ( username, email, password) =>{
        async function hashPassword(password) {
            const salt = 10;
            const hashedPassword = await bcrypt.hash(password, salt);
            return hashedPassword;
        }

        try {
            const query = "INSERT INTO User (id, username, email, password) VALUES (0, ?, ?, ?);"
            const [result] = await connection.execute(query,[
                username,
                email,
                await hashPassword(password).then((hashed) =>{ return hashed}),
            ]);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error("Error guardar el usuario");
        }
    }
}

export default user;