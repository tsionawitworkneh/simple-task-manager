import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Task from "./Components/task";
import "./App.css"

function App() {
  const [taskName, setTaskName] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [taskList, setTaskList] = useState([]);

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const addTask = () => {
    if (!taskName.trim()) return;

    const newTask = {
      id: Date.now(),
      task: taskName,
      time: taskTime,
      completed: false,
    };

    setTaskList([...taskList, newTask]);
    setTaskName("");
    setTaskTime("");
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className={darkMode ? "container dark" : "container"}>

      <div className="header">
        <h1>Task Manager</h1>

        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
      

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter task..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <input
          type="date"
          value={taskTime}
          onChange={(e) => setTaskTime(e.target.value)}
        />

        <button onClick={addTask}>
          Add Task <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      <div className="task-list">
        {taskList.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;