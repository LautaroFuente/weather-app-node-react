import express from "express";
import { getAllUsers, getOneUser, addUser } from "../controllers/UserController";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:email", getOneUser);
router.post("/", addUser);

export default router;
