import { FormEvent, useState } from "react"

interface TodoCreateFormProps {
  onNewTodo: (todoName: string) => void;
}

function TodoCreateForm({ onNewTodo }: TodoCreateFormProps) {
  const [todoName, setTodoName] = useState("");

  const onSubmitTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewTodo(todoName);
    setTodoName("");
  }

  return (
    <form onSubmit={onSubmitTodo}>
      <input type="text" name="todo"
        value={todoName} onChange={(e) => setTodoName(e.target.value)} />
      <button>Hinzufügen</button>
    </form>
  )
}

export default TodoCreateForm
