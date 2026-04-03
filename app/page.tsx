"use client";
import { useState } from "react";
import TaskInput from "./components/taskinput";
import TaskList from "./components/tasklist";
import Footer from "./components/footer";
import "./components/styles.css";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  }
  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <body>
      <main className="container">
        <h1>To-Do App</h1>
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      
      </main>

      <Footer />
    </body>

  );
}