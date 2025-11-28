import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeeList({ employees, onEmployeeSelect, selectedId }) {
  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onSelect={onEmployeeSelect}
          isSelected={employee.id === selectedId}
        />
      ))}
    </div>
  );
}

export default EmployeeList;