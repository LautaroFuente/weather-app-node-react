import user from "../model/User";
import { emailUserSchema, userSchema } from "../schemas/userSchema";

export const getAllUsers = async (req, res) =>{
    try {
        let data = await user.getAllUsers();
    
        res.status(200).json(data);
    } catch (e) {
        console.log(e);
        throw new Error("Error al cargar los usuarios");
    }
};

export const getOneUser = async (req, res) =>{
    try {
        const { email } = req.params;
    
        const result = emailUserSchema.safeParse({ email });
        if (result.success) {
          console.log("Validacion correcta");
          let data = await user.getOneUser(email);
    
          res.status(200).json(data);
        } else {
          console.error("Errores de validacion", result.error.errors);
          res.status(400).json({ errors: result.error.format() });
        }
    } catch (e) {
        console.log(e);
        throw new Error("Error al cargar el usuario");
    }
};

export const getPasswordFromOneUser = async (req, res) =>{
    try {
        const { email } = req.params;
    
        const result = emailUserSchema.safeParse({ email });
        if (result.success) {
          console.log("Validacion correcta");
          let data = await user.getPasswordFromOneUser(email)
    
          res.status(200).json(data);
        } else {
          console.error("Errores de validacion", result.error.errors);
          res.status(400).json({ errors: result.error.format() });
        }
    } catch (e) {
        console.log(e);
        throw new Error("Error al cargar el usuario");
    }
};

export const addUser = async (req, res) =>{
    try {
        const { username, email, password } = req.body;
        const result = userSchema.safeParse({ username, email, password });
        if (result.success) {
          console.log("Validacion correcta");
          let userExist = await user.getOneUser(email);
          if (userExist.length > 0) {
            res.status(409).json({ errors: "Email ya registrado" });
          } else {
            let data = await user.addUser(username, email, password);
    
            res.status(201).json(data);
          }
        } else {
          console.error("Errores de validacion", result.error.errors);
          res.status(400).json({ errors: result.error.format() });
        }
    } catch (e) {
        console.log(e);
        throw new Error("Error al crear el usuario");
    }
};