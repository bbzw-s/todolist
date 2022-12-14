import { Request, Response } from "express";
import Todo from "./todos.model";

export const getAllTodos = (_: Request, res: Response) => {
  const todos = Todo.getAll();
  return res.json(todos).status(200);
};

export const updateTodo = (req: Request, res: Response) => {
  const todoId = req.params.id;
  if (!todoId) res.status(400);

  const newTodo: {
    title: string;
    done: boolean;
  } = req.body.todo;
  if (!newTodo) res.status(400);

  Todo.update(todoId, new Todo(newTodo.title, newTodo.done));
  return res.status(200);
};
