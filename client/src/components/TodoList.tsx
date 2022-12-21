import Todo from "./Todo";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: string) => void;
  onUpdate: (id: string, data: Todo) => void;
}

function TodoList({ todos, onDelete, onUpdate }: TodoListProps) {
  const todoItems = todos.map((todo) => (
    <Todo
      _id={todo.id}
      title={todo.title}
      done={todo.done}
      onDelete={onDelete}
      onUpdate={onUpdate}
      key={todo.id}
    />
  ));

  return (
    <>
      <ul className="todos-list">{todoItems}</ul>
    </>
  );
}

export default TodoList;
