CREATE TABLE User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Weather (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    city_name VARCHAR(255) NOT NULL,
    search_time DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE SET NULL
);

CREATE TABLE CityTop (
    city_name VARCHAR(255) PRIMARY KEY,
    search_count INT DEFAULT 0
);
