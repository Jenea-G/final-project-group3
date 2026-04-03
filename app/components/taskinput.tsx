"use client";
import{ useState } from "react";
import "./styles.css";

export default function TaskInput({ addTask }: {addTask: (task: string) => void }) {
  const[task,setTask] = useState("");
  const deleteTask = (index: number) => {
  setTasks(tasks.filter((task, i) => i !== index));
};

  const handleAdd = () =>{
    if (task.trim()===""){
      alert("task cannot be empty");
      return;
    }
    addTask(task);
    setTask("");
  };
  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Add a new task..."
        className="input"
        value={task}
        onChange={(e)=> setTask(e.target.value)}
      />
      <button className="btn-add" onClick={handleAdd}>Add</button>
    </div>
  );
}