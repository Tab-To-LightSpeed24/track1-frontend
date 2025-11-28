import React from 'react';

function Sidebar({ employees, onFilterChange, onEmployeeSelect }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Status Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
        <select
          onChange={(e) => onFilterChange('status', e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">All</option>
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Overdue">Overdue</option>
        </select>
      </div>

      {/* Priority Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
        <select
          onChange={(e) => onFilterChange('priority', e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {/* Employee Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Employee</label>
        <select
          onChange={(e) => onEmployeeSelect(parseInt(e.target.value, 10))}
          className="block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">All Employees</option>
          {employees.map(emp => (
            <option key={emp.id} value={emp.id}>{emp.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Sidebar;