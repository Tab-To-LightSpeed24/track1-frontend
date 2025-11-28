import React, { useState, useEffect } from 'react';
import mockData from './data/mockData.json';
import Sidebar from './components/Sidebar';
import SummaryCards from './components/SummaryCards';
import TasksTable from './components/TasksTable';
import EmployeeSpotlight from './components/EmployeeSpotlight';

function App() {
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [filters, setFilters] = useState({
    status: '',
    priority: '',
    search: '',
  });

  useEffect(() => {
    setEmployees(mockData.employees);
    setTasks(mockData.tasks);
    setFilteredTasks(mockData.tasks);
  }, []);

  useEffect(() => {
    let result = tasks;

    if (filters.status) {
      result = result.filter(t => t.status === filters.status);
    }
    if (filters.priority) {
      result = result.filter(t => t.priority === filters.priority);
    }
    if (filters.search) {
      result = result.filter(t => t.title.toLowerCase().includes(filters.search.toLowerCase()));
    }

    setFilteredTasks(result);
  }, [filters, tasks]);

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
  };

  const handleEmployeeSelect = (employeeId) => {
    if (employeeId) {
      const employee = employees.find(e => e.id === employeeId);
      setSelectedEmployee(employee);
    } else {
      setSelectedEmployee(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 lg:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">TaskLens Dashboard</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Sidebar
            employees={employees}
            onFilterChange={handleFilterChange}
            onEmployeeSelect={handleEmployeeSelect}
          />
          <div className="mt-8">
            <EmployeeSpotlight employee={selectedEmployee} tasks={tasks} />
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <SummaryCards tasks={tasks} />
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search by task title..."
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <TasksTable
            tasks={filteredTasks}
            employees={employees}
            onEmployeeSelect={handleEmployeeSelect}
          />
        </div>
      </div>
    </div>
  );
}

export default App;