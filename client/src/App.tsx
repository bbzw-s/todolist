import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "amogus", title: "hahalmao", done: false },
    { id: "reacteschlit", title: "hello?", done: false },
  ]);

  const deleteTodo = (id: string) => {
    const updated = todos.filter(todo => todo.id !== id);
    setTodos(updated);
  }

  const toggleTodo = (id: string) => {
    const updated = todos.map(todo => {
      if (todo.id === id)
        return { ...todo, done: !todo.done };

      return todo;
    });
    setTodos(updated);
  }

  const todoList = <TodoList todos={todos} onDelete={deleteTodo} onSelect={toggleTodo} />

  return (<>
    <h1>Todo Liste</h1>
    <div>
      {todoList}
    </div>
  </>);
}

export default App;
