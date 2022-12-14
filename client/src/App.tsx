import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

const API_URL = "http://localhost:5002/todos";

function App() {
  // In dieser Zustandsvariable wird das Ergebniss der Datenabfrage,
  // also die Todos, gespeichert.
  const [todos, setTodos] = useState<Todo[]>([]);

  // In dieser Zustandsvariable wird festgehalten, 
  // ob die Daten noch am laden, oder bereits vorhanden sind.
  const [loading, setLoading] = useState<boolean>(true);

  // In dieser Zustandsvariable wird ein eventueller Fehler bei der 
  // Datenabfrage festgehalten, falls einer auftreten sollte.
  const [error, setError] = useState(null);

  // Mit useEffect wird Verhindert, dass die Datenabfrage nur 
  // beim ersten Laden der Seite getätigt wird.
  useEffect(() => {

    // Hier werden die Daten von der API abgegfragt.
    // setTodos, setError und setLoading sind Methoden der useState Hook,
    // mit der man in React reaktiven Zustand der Applikation managen kann.
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Bogos :(");
        return res.json();
      })
      .then((data) => setTodos(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));

  }, []);

  const deleteTodo = (id: string) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  };

  const toggleTodo = (id: string) => {
    const updated = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done: !todo.done };

      return todo;
    });
    setTodos(updated);
  };

  const todoList = (
    <TodoList todos={todos} onDelete={deleteTodo} onSelect={toggleTodo} />
  );

  if (error)
    return (<p>Es ist ein Fehler aufgetreten.</p>);

  return (
    <>
      <h1>Todo Liste</h1>
      <div>{loading ? "Todos werden geladen..." : todoList}</div>
    </>
  );
}

export default App;
