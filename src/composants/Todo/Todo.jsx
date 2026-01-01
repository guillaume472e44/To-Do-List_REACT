import "./Todo.css";

export default function Todo({ text, id, deleteTask }) {
  return (
    <li className="todo">
      <div className="todo__container">
        <p> {text} </p>
        <button onClick={() => deleteTask(id)} className="todo__deleteBtn">
          X
        </button>
      </div>
    </li>
  );
}
