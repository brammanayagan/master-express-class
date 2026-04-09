import express from "express";
import { dataAdding } from "../controllers/authControllers.js";

const routes = express.Router();

routes.post("/create", dataAdding);

export default routes;
