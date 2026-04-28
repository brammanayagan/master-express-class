import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    userName: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    createdBy: {
      type: String,
      default: "Admin",
    },
    updatedAtBy: {
      type: String,
      default: "Admin",
    },
  },
  { timestamps: true },
);

const authModel = mongoose.model("JWT auth DB", authSchema);

export default authModel;
