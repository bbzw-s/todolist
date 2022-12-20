import { Request, Response } from "express";
import Todo from "./todos.model";

export const createTodo = (req: Request, res: Response) => {
  const todo: string = req.body.todo;
  if (!todo || todo.length === 0) return res.status(400).send();

  const newTodo = new Todo(todo);
  newTodo.save();

  res.status(200).json(newTodo).send()
};

export const getAllTodos = (_: Request, res: Response) => {
  const todos = Todo.getAll();
  res.json(todos).status(200);
};

export const updateTodo = (req: Request, res: Response) => {
  const todoId = req.params.id;
  if (!todoId) res.status(400).send();

  const newTodo: {
    title: string;
    done: boolean;
  } = req.body;
  if (!newTodo) res.status(400).send();

  Todo.update(todoId, new Todo(newTodo.title, newTodo.done));
  res.status(200).send();
};
