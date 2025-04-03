// import app from "./app";
// import "./db/mongoose"
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server started at port: ${PORT}`);
// });





import mongoose from "mongoose";
import app from "./app";

const PORT = process.env.PORT || 8080;

mongoose
  .connect("mongodb://localhost:27017/todo-app")
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB error:", err));
