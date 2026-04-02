"use client";
import { useState } from "react";
import TaskInput from "./components/taskinput";
import TaskList from "./components/tasklist";
import "./components/styles.css";

export default function Home() {
  const[tasks, setTasks] = useState<string[]>([]);

  const addTask = (task:string)=>{
    setTasks([...tasks,task]);
  }
  return (
    <main className="container">
      <h1>To-Do App</h1>

      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} />
    </main>
  );
}