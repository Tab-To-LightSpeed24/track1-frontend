import React from 'react';

function EmployeeCard({ employee, onSelect, isSelected }) {
  const { id, name, title, tasks_completed, tasks_total, avatar } = employee;
  const progress = tasks_total > 0 ? (tasks_completed / tasks_total) * 100 : 0;

  return (
    <div 
      className={`employee-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(id, name)}
    >
      <img src={avatar} alt={name} className="employee-avatar" />
      <div className="employee-info">
        <h3>{name}</h3>
        <p>{title}</p>
        <div className="task-progress">
          <p>Task Progress</p>
          <div className="progress-bar-container">
            <div 
              className="progress-bar" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span>{`${tasks_completed}/${tasks_total} tasks completed`}</span>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;