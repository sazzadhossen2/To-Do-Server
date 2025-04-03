
// import express from 'express';
// import { createTodo, getTodo } from '../controllers/todo';


// const router = express.Router();

// router.post('/todos',createTodo);
// router.get('/todos',getTodo);


// export default router;

import express from "express";
import { createTodo, getTodo } from "../controllers/todo";

const router = express.Router();

router.post("/todos", createTodo);
router.get("/todos", getTodo);
// router.get("/todos/:_id", getTodoById)

export default router;

