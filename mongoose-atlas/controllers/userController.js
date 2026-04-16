import userModel from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const { userID, userName, mobileNumber } = req.body;
    const create = await userModel.create({ userID, userName, mobileNumber });
    res.status(201).json({ msg: "Successfully Added" });
  } catch (err) {
    console.log("Error", err);
  }
};
