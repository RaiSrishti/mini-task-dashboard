import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Summary from "./components/Summary";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    // Load from localStorage safely
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(false);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add Task
  const addTask = (task) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        ...task,
        id: Date.now(),
        completed: false,
      },
    ]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <div className="container">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <TaskForm addTask={addTask} />

        <Summary tasks={tasks} />

        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
}

export default App;// localStorage integration added
