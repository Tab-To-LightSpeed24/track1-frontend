import React from 'react';

function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <p>No active tasks found for this employee.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={`task-item status-${task.status.toLowerCase().replace(' ', '-')}`}>
          <div className="task-description">{task.description}</div>
          <div className="task-status">Status: <strong>{task.status}</strong></div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;