import { z } from "zod";

export const userSchema = z.object({
  username: z
    .string()
    .max(50, "El campo no puede tener más de 50 caracteres"),
  email: z
    .string()
    .email("El formato del email no es válido"),
  password: z
    .string()
    .max(50, "El campo no puede tener más de 50 caracteres"),
});

export const emailUserSchema = userSchema.pick({
    email: true,
  });

export const passwordUserSchema = userSchema.pick({
    password: true,
});