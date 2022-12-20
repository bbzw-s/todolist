import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import { useTodos } from "./DataContext";

const API_URL = "http://localhost:5002/todos";

function App() {
  const { todos, loading, error, create, updateById, deleteById } = useTodos();

  const todoList = (
    <TodoList todos={todos} onDelete={deleteById} onUpdate={updateById} />
  );

  if (error)
    return (<p>Es ist ein Fehler aufgetreten.</p>);

  return (
    <>
      <h1>Todo Liste</h1>
      <div>{loading ? "Todos werden geladen..." : todoList}</div> 
      <TodoCreateForm onNewTodo={create} />
    </>
  );
}

export default App;
