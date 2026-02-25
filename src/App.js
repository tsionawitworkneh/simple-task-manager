import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  }
  return (
    <div className="container">
      <h1>Task Manager</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}><FontAwesomeIcon icon={faPlus} /></button>
      </div>

      <div className="task-list">
        {tasks.map((t, index) => (
          <div
            key={index}
            className={`task ${t.completed ? "completed" : ""}`}
          >
            <span onClick={() => toggleTask(index)}>
              <FontAwesomeIcon icon={faCheck} />
            </span>

            <p>{t.text}</p>

            <span onClick={() => deleteTask(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </span>
          </div>
        ))}
    
      </div>

      <div className="footer">
        Total Tasks: {tasks.length}
      </div>
    
    </div>
  );
}

export default App;
