import { Router } from "express";
import {
  getAllTodos,
  createTodo,
  updateTodo,
} from "./todos.controller";

const router = Router();

router.get("/", getAllTodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);

export default router;
