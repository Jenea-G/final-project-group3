"use client";
import "./styles.css";

export default function TaskList({
tasks,
deleteTask,
}: {
tasks: string[];
deleteTask: (index: number) => void;
}) {    return (
        <div className="task-list">
            
            {tasks.map((taskText, index)=>(
            <div className="task-item" key={index}>


                <button className="btn-check">✔</button>

                <span className="task-text">{taskText}</span>


                <div className="task-actions">
                    <button className="btn-edit">Edit</button>
                    <button className="btn-delete" onClick={() => deleteTask(index)}>
            Delete
            </button>
                </div>
            </div>
            
            ))}

        </div>
    );
}

