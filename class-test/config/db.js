import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB connected succefully on ${conn.connection.host}`);
  } catch (err) {
    console.log("error", err);
    process.exit(0);
  }
};

export default connectDB;
