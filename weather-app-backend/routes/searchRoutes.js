import express from "express";
import { searchWeather } from "../controllers/searchController.js";

const router = express.Router();

router.get("/:city/:country", searchWeather);

export default router;