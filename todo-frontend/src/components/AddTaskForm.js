import React, { useState } from 'react';

function AddTaskForm({ onAdd }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    onAdd(task);
    setTask(''); // Clear the input after adding the task
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
