import cors from "cors"
import helmet from "helmet"
import express from "express"
import morgan from "morgan"
import path from "path";

const __dirname = path.resolve();
const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

//app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/server/auth", authRoutes);
app.use("/server/purchases", purchaseRoutes);
app.use("/server/clients", clientRoutes);
app.use("/server/employeds", employedRoutes);

//app.get("*", (req, res) => {
//  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
//});

export default app;