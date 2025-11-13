# ---- Etapa base ----
FROM node:20-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración primero (para aprovechar el cache)
COPY package*.json ./

# Instala dependencias
RUN npm install --production

# Copia el resto del código del backend
COPY . .

# Expone el puerto (debe coincidir con el usado en server.js)
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]
