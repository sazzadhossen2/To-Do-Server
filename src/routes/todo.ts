

import express from "express";
import { createTodo, deleteTodobyId, getTodo, getTodoById } from "../controllers/todo";

const router = express.Router();

router.post("/todos", createTodo);
router.get("/todos", getTodo);
router.get("/todos/:_id", getTodoById);
router.delete("/todos/:_id", deleteTodobyId);

export default router;

