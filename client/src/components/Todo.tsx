interface TodoProps {
  _id: string;
  title: string;
  done: boolean;
  onDelete: (id: string) => void;
  onSelect: (id: string) => void;
}

function Todo({ _id, title, done, onDelete, onSelect }: TodoProps) {
  return (<>
    <li>
      <div>
        <input type="checkbox" checked={done} onChange={() => onSelect(_id)} />
        <span>{title}</span>
        <button onClick={() => onDelete(_id)}>Löschen</button>
      </div>
    </li>
  </>);
}

export default Todo;
