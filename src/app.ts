import express from "express";
import todoRoutes from "./routes/todo";

const app = express();

app.use(express.json());
app.use("/api", todoRoutes);

export default app;
