import { Router } from "express";
import {
  getAllTodos,
  updateTodo
} from "./todos.controller";

export default Router()
  .get("/", getAllTodos)
  .put("/:id", updateTodo);
