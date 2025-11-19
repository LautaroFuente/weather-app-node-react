-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS weather_app_database;
USE weather_app_database;

-- Tabla de usuarios
CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Tabla de búsquedas de clima
CREATE TABLE IF NOT EXISTS weather (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    city_name VARCHAR(255) NOT NULL,
    search_time DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE SET NULL
);

-- Tabla de ciudades más buscadas
CREATE TABLE IF NOT EXISTS citytop (
    city_name VARCHAR(255) PRIMARY KEY,
    search_count INT DEFAULT 0
);