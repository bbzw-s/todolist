interface TodoProps {
  _id: string;
  title: string;
  done: boolean;
  onDelete: (id: string) => void;
  onUpdate: (id: string, data: Todo) => void;
}


function Todo({ _id, title, done, onDelete, onUpdate }: TodoProps) {
  const deleteSVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>;

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
          <button onClick={() => onDelete(_id)}>{deleteSVG}</button>
        </div>
      </li>
    </>
  );
}

export default Todo;
