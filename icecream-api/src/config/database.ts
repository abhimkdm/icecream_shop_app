import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URL = process.env.URL || "Demo";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connection Successful");
  } catch (error) {
    console.log("Connection Issue" + error);
    process.exit(1);
  }
};
