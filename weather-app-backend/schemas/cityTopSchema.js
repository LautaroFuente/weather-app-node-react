import { z } from "zod";

export const cityTopSchema = z.object({
    city_name: z
      .string()
      .max(255, "El campo no puede tener más de 255 caracteres")
      .regex(/^[a-zA-Z\s]+$/, "El nombre de la ciudad solo puede contener letras y espacios"),
    search_count: z
      .number()
      .nonnegative("El contador de búsqueda debe ser un número entero no negativo")
      .int("El contador de búsqueda debe ser un número entero"),
  });
  