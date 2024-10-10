import express from "express";
import { getTop, getOneCity, addCity } from "../controllers/CityTopController.js";

const router = express.Router();

router.get("/", getTop);
router.get("/:city_name", getOneCity);
router.post("/", addCity);

export default router;