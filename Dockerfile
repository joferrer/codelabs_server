# Usar una imagen base de Node.js
FROM node:19-alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
COPY package.json package-lock.json tsconfig.json /app/
COPY src /app/src

# Instalar las dependencias
RUN npm ci


# Exponer el puerto en el contenedor
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
