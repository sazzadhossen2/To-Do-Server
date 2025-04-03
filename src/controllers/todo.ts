import Todo from "../models/todo";
import { Request, Response } from "express";

export const createTodo = async (req: Request, res: Response) => {
  const todo = new Todo(req.body); // ✅ fixed

  try {
    await todo.save();
    res.status(201).json({
      message: "Todo created successfully",
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

export const getTodo = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find(); // ✅ fixed
    res.json({ todos });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getTodoById = async (req: Request, res: Response) => {
  try {
    const _id = req.params._id;
    const todo = await Todo.find({_id});

    if(!todo) {
      res.status(404).json({
        message: "The todo does not exist",
      })
    }

    res.json({ todo });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteTodoById = async (req: Request, res: Response) => {
  try {
    const _id = req.params._id;
    const todo = await Todo.deleteOne({_id});

    if(!todo) {
      res.status(404).json({
        message: "The todo couldn't deleted!",
      })
    }

    res.json({ message: "The todo was deleted successfully!"  });
  } catch (error) {
    res.status(500).json({ error });
  }
};
