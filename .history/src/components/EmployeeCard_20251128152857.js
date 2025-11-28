import React from 'react';

function EmployeeCard({ employee, onSelect, isSelected }) {
  const { id, name, title, tasks_completed } = employee;

  return (
    <div 
      className={`employee-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(id, name)} // Trigger the selection function
    >
      <h3>{name}</h3>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Tasks Completed:</strong> {tasks_completed}</p>
      <small>(Click to view active tasks)</small>
    </div>
  );
}

export default EmployeeCard;