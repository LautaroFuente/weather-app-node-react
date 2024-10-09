import express from "express";
import { searchWeather } from "../controllers/searchController";

const router = express.Router();

router.get("/:city/:country", searchWeather);

export default router;