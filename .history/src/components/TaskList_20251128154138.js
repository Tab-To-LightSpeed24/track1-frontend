import React from 'react';

function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <p>No active tasks found for this employee.</p>;
  }

  const getPriorityClass = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return '';
    }
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={`task-item status-${task.status.toLowerCase().replace(' ', '-')}`}>
          <div className="task-details">
            <p className="task-description">{task.description}</p>
            <span className="task-due-date">Due: {task.due_date}</span>
          </div>
          <div className={`task-priority ${getPriorityClass(task.priority)}`}>
            {task.priority}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;