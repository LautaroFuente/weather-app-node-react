import user from "../model/User.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { loginUserSchema } from "../schemas/userSchema.js";

dotenv.config();

async function checkPassword(CorrectPassword, inputPassword) {
  const match = await bcrypt.compare(inputPassword, CorrectPassword);
  return match;
}

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = loginUserSchema.safeParse({ email, password });
    if (result.success) {
      console.log("Validacion correcta");
      let data = await user.getPasswordFromOneUser(email);
      if (data.length === 0) {
        return res.status(404).json({ error: "Usuario no registrado" });
      }
      const match = await checkPassword(
        data[0].password,
        password
      );

      if (match) {
        data = await user.getOneUser(email);
        const token = jwt.sign({ email }, process.env.JWT_KEY, {
          expiresIn: "30m",
        });
        res.status(200).json({ token, data });
      } else {
        res.status(401).json({ error: "Contraseña incorrecta" });
      }
    } else {
      console.error("Errores de validacion");
      res.status(400).json({});
    }
  } catch (e) {
    console.log(e);
    throw new Error("Error al loguear al usuario");
  }
};