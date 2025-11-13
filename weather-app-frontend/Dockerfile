# ---- Etapa de build ----
FROM node:20-alpine AS build

WORKDIR /app

# Copiamos archivos de configuración
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# Generamos el build de producción
RUN npm run build

# ---- Etapa de producción (servidor estático Nginx) ----
FROM nginx:stable-alpine

# Copiamos el build generado al contenedor Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponemos el puerto por defecto de Nginx
EXPOSE 80

# Iniciamos Nginx
CMD ["nginx", "-g", "daemon off;"]
