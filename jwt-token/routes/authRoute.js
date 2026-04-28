import express from "express";
import { handleLogin, handleRegister } from "../controllers/authController.js";

const route = express.Router();

route.post("/register", handleRegister);
route.post("/login", handleLogin);

export default route;

// http://localhost:5000/api/auth/register
// http://localhost:5000/api/auth/login
