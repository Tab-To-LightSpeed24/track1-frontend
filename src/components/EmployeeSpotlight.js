import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

function EmployeeSpotlight({ employee, tasks }) {
  if (!employee) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <p className="text-gray-500">Select an employee to see their details.</p>
      </div>
    );
  }

  const employeeTasks = tasks.filter(t => t.employee_id === employee.id);
  const taskCounts = {
    todo: employeeTasks.filter(t => t.status === 'Todo').length,
    inProgress: employeeTasks.filter(t => t.status === 'In Progress').length,
    completed: employeeTasks.filter(t => t.status === 'Completed').length,
  };

  const data = [
    { name: 'Todo', value: taskCounts.todo },
    { name: 'In Progress', value: taskCounts.inProgress },
    { name: 'Completed', value: taskCounts.completed },
  ];

  const COLORS = ['#A0AEC0', '#4299E1', '#48BB78'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img src={employee.avatar} alt={employee.name} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h3 className="text-xl font-bold">{employee.name}</h3>
          <p className="text-gray-500">{employee.title}</p>
        </div>
      </div>

      <h4 className="font-bold mb-2">Task Summary</h4>
      <div style={{ width: '100%', height: 150 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8">
              {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <ul className="mt-4 space-y-2">
        <li className="flex justify-between"><span>Todo</span><span className="font-bold">{taskCounts.todo}</span></li>
        <li className="flex justify-between"><span>In Progress</span><span className="font-bold">{taskCounts.inProgress}</span></li>
        <li className="flex justify-between"><span>Completed</span><span className="font-bold">{taskCounts.completed}</span></li>
      </ul>
    </div>
  );
}

export default EmployeeSpotlight;