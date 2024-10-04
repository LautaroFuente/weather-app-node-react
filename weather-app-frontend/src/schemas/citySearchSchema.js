import { z } from "zod";

export const citySearchSchema = z.object({
  city: z
    .string()
    .max(50, "El campo no puede tener más de 50 caracteres"),
  country: z
    .string()
    .max(50, "El campo no puede tener más de 50 caracteres"),
});