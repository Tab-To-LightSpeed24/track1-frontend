import React, { useState, useEffect } from 'react';
import './App.css';
import mockData from './data/mockData.json';
import EmployeeList from './components/EmployeeList';
import TaskList from './components/TaskList';

function App() {
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [selectedEmployeeName, setSelectedEmployeeName] = useState('');

  // 1. Fetch data on component mount
  useEffect(() => {
    // In a real app, this would be an API call (fetch/axios)
    setEmployees(mockData.employees);
    setTasks(mockData.tasks);
  }, []);

  // 2. Handle employee card click
  const handleEmployeeSelect = (employeeId, employeeName) => {
    setSelectedEmployeeId(employeeId);
    setSelectedEmployeeName(employeeName);
  };

  // 3. Filter tasks for the selected employee
  const tasksForSelectedEmployee = tasks.filter(
    (task) => task.employee_id === selectedEmployeeId
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>ProU Employee & Task Dashboard</h1>
      </header>
      <main>
        <div className="employee-section">
          <h2>Employee Directory</h2>
          <EmployeeList 
            employees={employees} 
            onEmployeeSelect={handleEmployeeSelect} 
            selectedId={selectedEmployeeId}
          />
        </div>

        <div className="task-section">
          <h2>
            {selectedEmployeeId 
              ? `Tasks for ${selectedEmployeeName}` 
              : 'Select an Employee to view Tasks'}
          </h2>
          {selectedEmployeeId && (
            <TaskList tasks={tasksForSelectedEmployee} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;