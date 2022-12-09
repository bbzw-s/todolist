import { Router } from "express";
import { getAllTodos } from "./todos.controller";

export default Router()
  .get("/", getAllTodos);
