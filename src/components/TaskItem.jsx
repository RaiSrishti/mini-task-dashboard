function TaskItem({ task, deleteTask, toggleComplete }) {
  return (
    <div className="task-item">
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />

        <span className={task.completed ? "completed" : ""}>
          {task.title}
        </span>
      </div>

      <button onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;