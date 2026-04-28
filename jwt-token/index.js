import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoute from "./routes/authRoute.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);

connectDB();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`server is connceted on http://localhost:${PORT}`);
});

// http://localhost:5000/api/auth
