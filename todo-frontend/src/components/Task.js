import React from 'react';

function Task({ task, onDelete, onToggle }) {
  return (
    <div
      className={`task ${task.completed ? 'completed' : ''}`}
      onClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{' '}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering toggle when clicking delete
            onDelete(task.id);
          }}
          className="delete-btn"
        >
          Delete
        </button>
      </h3>
    </div>
  );
}

export default Task;
