import express from "express";
import { handleLogin, handleRegister } from "../controllers/authController.js";
import { tokenValidation } from "../middlewares/authMiddleware.js";

const route = express.Router();

route.post("/register", handleRegister);
route.post("/login", handleLogin);
route.get("/dashboard", tokenValidation, handleDashboard);

export default route;

// http://localhost:5000/api/auth/register
// http://localhost:5000/api/auth/login
