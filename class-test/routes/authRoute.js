import express from "express";
import { addUser } from "../controller/authController.js";

const route = express.Router();

route.post("/adduser", addUser);

export default route;

// http://localhost:5000/api/auth/adduser
