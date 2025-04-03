import mongoose from "mongoose";
const MONGODB_URL ="mongodb://127.0.0.1:27017/node-rest-api";

mongoose.connect(MONGODB_URL).then(()=>{
  console.log('Connected to DB');
}).catch((err)=>{
  console.log(err);
})