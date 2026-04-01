import TaskInput from "./components/taskinput";
import TaskList from "./components/tasklist";
import "./components/styles.css";

export default function Home() {
  return (
    <main className="container">
      <h1>To-Do App</h1>

      <TaskInput />
      <TaskList />
    </main>
  );
}