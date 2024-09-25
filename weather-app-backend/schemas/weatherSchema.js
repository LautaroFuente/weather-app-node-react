import { z } from "zod";

export const weatherSchema = z.object({
    user_id: z
      .number()
      .nonnegative("El ID de usuario debe ser un número entero no negativo")
      .int("El ID de usuario debe ser un número entero"),
    city_name: z
      .string()
      .max(255, "El campo no puede tener más de 255 caracteres")
      .regex(/^[a-zA-Z\s]+$/, "El nombre de la ciudad solo puede contener letras y espacios"),
    search_time: z
      .string()
      .regex(/^\d{2}\/\d{2}\/\d{4}$/, "El formato de fecha debe ser DD/MM/YYYY"),
  });
  