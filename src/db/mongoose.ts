import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todo-app");
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Connection error", err);
    process.exit(1);
  }
};
