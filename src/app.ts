

// import express, { Request, Response } from 'express';
// // import todoRouters from "./routes/todo";
// import todoRouters from './routes/todo';
// const app = express();

// // Parse incomming JSON
// app.use(express.json());
// app.get('/', (req: Request, res: Response) => {
//   res.json({ message: 'Rest Api Using Node' });
// });
// app.use(todoRouters);
// export default app;



import express from "express";
import todoRoutes from "./routes/todo";

const app = express();

app.use(express.json());
app.use("/api", todoRoutes);

export default app;
