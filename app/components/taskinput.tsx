import "./styles.css";

export default function TaskInput() {
  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Add a new task..."
        className="input"
      />
      <button className="btn-add">Add</button>
    </div>
  );
}