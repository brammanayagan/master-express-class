import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
      unique: true,
    },

    userName: {
      type: String,
      required: true,
      trim: true,
    },

    mobileNumber: {
      type: Number,
      required: true,
    },

    createdBy: {
      type: String,
      default: "Admin",
    },

    updatedBy: {
      type: String,
      default: "Admin",
    },
  },
  { timestamps: true },
);

const userModel = mongoose.model("userData", userSchema);

export default userModel;
