import TaskInput from "./components/taskinput";
import TaskList from "./components/tasklist";
import Footer from "./components/footer";
import "./components/styles.css";

export default function Home() {
  return (
    <body>
      <main className="container">
        <h1>To-Do App</h1>

        <TaskInput />
        <TaskList />
      </main>

      <Footer />
    </body>

  );
}