# 🌅 Weather App
-----------
## 📖 Description
Weather App is a modern and intuitive web application that allows users to search the current weather of cities around the world.
Users can create an account, log in, and save their favorite weather searches to view them later in their personal dashboard.

The application also features a Global Trending Cities section that displays the most searched cities across all users.

The UI is clean, responsive, and built with a modern React design, while the backend provides a secure and scalable API powered by Node.js and MySQL.
## 🚀 Getting Started
Follow these steps to run the entire project using Docker Compose, which will start the frontend, backend, and MySQL database in containers.

### 🧩 Prerequisites

Make sure you have the following installed:

- Docker

- Docker Compose

- Git (optional, for cloning the repository)

### 🪄 Steps
1. Clone the repository
``` bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```
2. Create environment files

The project requires two .env files:

#### 📌 Root .env (for Docker + MySQL)

Copy the example file:

cp .env.example .env


This file configures the database container:

#### Database root credentials
MYSQL_ROOT_PASSWORD=your_root_password

#### App database
MYSQL_DATABASE=weather_app_database
MYSQL_USER=your_user
MYSQL_PASSWORD=your_password

#### MySQL port
MYSQL_PORT=3306

#### 📌 Backend .env (for Node.js)

Inside the /backend folder:

cp backend/.env.example backend/.env


This file configures the backend connection to the database and authentication:
``` bash
DB_HOST=db
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=weather_app_database
DB_PORT=3306
JWT_KEY=your_key

``` 
Replace the values with your own secure credentials.

3. Build and start the containers
``` bash
docker compose up --build
``` 

This command will:

- Start a MySQL container using the credentials defined in .env.

- Launch the Node.js backend (Express), connected to the database.

- Serve the React frontend from its own container.

4. Access the app

Frontend (React):
http://localhost:3000

Backend API (Node.js/Express):
http://localhost:8080

MySQL database (inside Docker):
Host: db
Port: 3306
User & Password: from your .env

5. Stop the containers
``` bash
docker compose down
``` 
## 🧰 Tech Stack
### 🖥️ Frontend
- React

- CSS

### ⚙️ Backend
- Node.js

- Express.js

- MySQL

- JWT Authentication

- REST API with controller-service architecture

- External Weather API integration
### 🐳 DevOps & Environment
- Docker & Docker Compose

- .env files for secure configuration

- Multi-container environment: frontend + backend + database

- Environment variable-based database connection
