interface TodoProps {
  _id: string;
  title: string;
  done: boolean;
  onDelete: (id: string) => void;
  onUpdate: (id: string, data: Todo) => void;
}

function Todo({ _id, title, done, onDelete, onUpdate }: TodoProps) {
  return (
    <>
      <li>
        <div>
          <input
            type="checkbox"
            checked={done}
            onChange={(e) => onUpdate(_id, { title, done: e.target.checked, id: _id })}
          />
          <span style={{textDecoration: done ? 'line-through' : 'none'}}>{title}</span>
          <button onClick={() => onDelete(_id)}>Löschen</button>
        </div>
      </li>
    </>
  );
}

export default Todo;
