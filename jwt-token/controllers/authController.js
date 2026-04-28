import authModel from "../models/authModel.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const handleRegister = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const checkEmail = await authModel.findOne({ email });

    if (checkEmail) {
      res.status(404).json({ msg: "User already exist, Please Login" });
      return;
    }

    const hashing = await bcrypt.hash(password, 10);

    const registerData = await authModel.create({
      userName,
      email,
      password: hashing,
    });
    res.status(201).json({ msg: "Registered Succesfully", registerData });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: error });
  }
};

export const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const checkEmail = await authModel.findOne({ email });

    if (!checkEmail) {
      res.status(404).json({ msg: "Not a user, Please Register" });
      return;
    }

    const checkPassword = await bcrypt.compare(password, checkEmail.password);

    if (!checkPassword) {
      res.status(404).json({ msg: "Incorrect Password" });
      return;
    }

    const token = await jwt.sign(
      {
        id: checkEmail._id,
        email: checkEmail.email,
      },
      process.env.JWT_SECURE,
      { expiresIn: "1h" },
    );

    res.status(200).json({ msg: "Logged-in Succesfully", token });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: error });
  }
};

const handleDashboard = async (req, res) => {
  try {
    res.status(200).json({ msg: "OK", user: req.setUser });
  } catch (error) {}
};
