import express from "express";
import { createUser } from "../controllers/userController.js";

const route = express.Router();

route.post("/create", createUser);

export default route;

// http://localhost:5000/api/user/create
