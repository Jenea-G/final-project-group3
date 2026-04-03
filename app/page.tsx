"use client";
import { useState } from "react";
import TaskInput from "./components/taskinput";
import TaskList from "./components/tasklist";
import Footer from "./components/footer";
import "./components/styles.css";

type Task = {
  text: string;
  checked: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, { text: task, checked: false }]);
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const toggleTask = (index: number) => {
    const updated = [...tasks];
    updated[index].checked = !updated[index].checked;
    setTasks(updated);
  };

  return (
    <body>
      <main className="container">
        <h1>To-Do App</h1>
        <TaskInput addTask={addTask} />
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      </main>

      <Footer />
    </body>
  );
}