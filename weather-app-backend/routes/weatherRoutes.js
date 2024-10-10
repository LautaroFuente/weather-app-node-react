import express from "express";
import { getWeatherFromOneUser, addWeatherFromOneUser } from "../controllers/weatherController.js";
import checkToken from "../middleware/checkToken.js";

const router = express.Router();

router.get("/", checkToken, getWeatherFromOneUser);
router.post("/", checkToken, addWeatherFromOneUser);

export default router;
