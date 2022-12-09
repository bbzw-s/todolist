import { Request, Response } from "express";
import Todo from "./todos.model";

export const getAllTodos = (_: Request, res: Response) => {
  const todos = Todo.getAll();
  return res.json(todos).status(200);
};
