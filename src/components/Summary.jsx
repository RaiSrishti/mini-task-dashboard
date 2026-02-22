function Summary({ tasks }) {
    const total = tasks.length;
    const completed = tasks.filter((task) => task.completed).length;
    const pending = total - completed;
  
    return (
      <div className="summary">
        <p>Total: {total}</p>
        <p>Completed: {completed}</p>
        <p>Pending: {pending}</p>
      </div>
    );
  }
  
  export default Summary;