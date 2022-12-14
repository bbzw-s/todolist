import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";

import todosRouter from "./todos/todos.router";
import Todo from "./todos/todos.model";

const SERVER_PORT = 5002;

const app: Express = express();

new Todo("hello").save();
new Todo("world").save();
new Todo("eier").save();

// CORS Middleware
app.use(cors());

// Logging Middleware
app.use(morgan("combined"));

// URL Encoding Middleware
app.use(express.urlencoded({ extended: false }));

app.use("/todos", todosRouter);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening at http://localhost:${SERVER_PORT}`);
});
