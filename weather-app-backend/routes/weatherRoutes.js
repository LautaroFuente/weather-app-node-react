import express from "express";
import { getWeatherFromOneUser, addWeatherFromOneUser } from "../controllers/weatherController";
import checkToken from "../middleware/checkToken";

const router = express.Router();

router.get("/", checkToken, getWeatherFromOneUser);
router.post("/", checkToken, addWeatherFromOneUser);

export default router;
