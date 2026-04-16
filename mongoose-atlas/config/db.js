import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB connected succefully ${conn.connection.host}`);
  } catch (err) {
    console.log("Something error", err);
    process.exit(1);
  }
};

export default connectDB;
