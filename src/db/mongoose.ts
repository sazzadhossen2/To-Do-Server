// import mongoose from "mongoose";
// const MONGODB_URL ="mongodb://127.0.0.1:27017/node-rest-api";

// mongoose.connect(MONGODB_URL).then(()=>{
//   console.log('Connected to DB');
// }).catch((err)=>{
//   console.log(err);
// })

// src/db/mongoose.ts
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
