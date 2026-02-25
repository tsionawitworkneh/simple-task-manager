import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

function task({ task, deleteTask, toggleComplete }) {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <div className="task-info">
        <h3>{task.task}</h3>
        <small>{task.time}</small>
      </div>

      <div className="task-actions">
        <button onClick={() => toggleComplete(task.id)}>
          <FontAwesomeIcon icon={faCheck} />
        </button>

        <button onClick={() => deleteTask(task.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export default task;