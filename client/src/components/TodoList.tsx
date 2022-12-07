import Todo from "./Todo";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: string) => void;
  onSelect: (id: string) => void;
}

function TodoList({ todos, onDelete, onSelect }: TodoListProps) {
  const todoItems = todos.map((todo) => (
    <Todo
      _id={todo.id}
      title={todo.title}
      done={todo.done}
      onDelete={onDelete}
      onSelect={onSelect}
      key={todo.id}
    />
  ));

  return (
    <>
      <ul>{todoItems}</ul>
    </>
  );
}

export default TodoList;
