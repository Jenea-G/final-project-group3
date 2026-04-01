import "./styles.css";

export default function TaskList() {
    return (
        <div className="task-list">
            {/* first task */}
            <div className={`task-item`}>


                <button className="btn-check">✔</button>

                <span className="task-text">text of a task</span>


                <div className="task-actions">
                    <button className="btn-edit">Edit</button>
                    <button className="btn-delete">Delete</button>
                </div>
            </div>
            {/* end of task */}

        </div>
    );
}
