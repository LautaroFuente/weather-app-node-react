import cors from "cors";
import helmet from "helmet";
import express from "express";
import morgan from "morgan";
import path from "path";
import authRoutes from "./routes/authRoutes.js";
import cityRoutes from "./routes/cityRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import weatherRoutes from "./routes/weatherRoutes.js";

const __dirname = path.resolve();
const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../weather-app-frontend/dist")));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", authRoutes);
app.use("/api/city", cityRoutes);
app.use("/api/user", userRoutes);
app.use("/api/weather", weatherRoutes);

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../weather-app-frontend/dist", "index.html")
  );
});

export default app;
