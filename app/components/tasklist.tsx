"use client";
import "./styles.css";

type Task = {
    text: string;
    checked: boolean;
};

export default function TaskList({
    tasks,
    deleteTask,
    toggleTask,
}: {
    tasks: Task[];
    deleteTask: (index: number) => void;
    toggleTask: (index: number) => void;
}) {
    return (
        <div className="task-list">
            {tasks.map((task, index) => (
                <div className="task-item" key={index}>
                    <div className="task-flex">
                        <button
                            className="btn-check"
                            onClick={() => toggleTask(index)}
                        >
                            {task.checked ? "✔" : ""}
                        </button>

                        <span
                            className="task-text"
                            style={{
                                textDecoration: task.checked ? "line-through" : "none",
                                opacity: task.checked ? 0.6 : 1,
                            }}
                        >
                            {task.text}
                        </span>
                    </div>


                    <div className="task-actions">
                        <button
                            className="btn-delete"
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}