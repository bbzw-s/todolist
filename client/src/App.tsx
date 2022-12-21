import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoCreateForm from "./components/TodoCreateForm";
import { useTodos } from "./DataContext";

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
      <TodoCreateForm onNewTodo={create} />
      <div>{loading ? "Todos werden geladen..." : todoList}</div>
    </>
  );
}

export default App;
