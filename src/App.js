import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Task from "./Components/task";
import "./App.css"

function App() {
  const [taskName, setTaskName] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [taskList, setTaskList] = useState([]);

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
    <div className="container">
      <h1>Task Manager</h1>

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