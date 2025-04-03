// import Todo, { ITodo } from "../models/todo";
// import { Request,Response } from "express";

// export const createTodo =  async (req: Request, res: Response) => {
//   const todo = new Todo<ITodo>(req.body); // No <ITodo> needed here

//   try {
//     await todo.save();
//     res.status(201).json({
//       message: 'Todo created successfully',
//     });
//   } catch (error) {
//     res.status(500).json({
//       error,
//     });
//   }
// }



// export const getTodo =async (req: Request, res: Response) => {
//   const todos =await Todo.find<ITodo>(); 

// res.json({
//   todos,
// });
// }


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


// export const getTodoById =async (req: Request, res: Response)=>{
// const todoId =req.params._id;

// try{
//   const todo =await Todo.findById(todoId);
//   if(!todo){
//     return res.status(404).json({
//       message:"The todo does not exist",
//     });
//   }
//     return res.json({
//       todo,
//     })
  
// }catch(error){
// return res.status(500).json({
//   error,
// });
// }
// };




// export const getTodoById = async (req: Request, res: Response) => {
//   const todoId =req.params._id;

//   try {
//     const todo= await Todo.findById(todoId);
// if(!todo){
//   return res.status(404).json({
//           message:"The todo does not exist",
//         });
// }
// return res.json({
//         todo,
//       })
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// };