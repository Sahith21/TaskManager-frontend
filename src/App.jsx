import React, { useEffect, useState } from 'react';
import { getTasks, addTask, updateTask, deleteTask } from './api/taskApi';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAdd = async (task) => {
    await addTask(task);
    loadTasks();
  };

  const handleToggle = async (id, completed) => {
    const taskToUpdate = tasks.find((t) => t.id === id);
    if (!taskToUpdate) return;
    await updateTask(id, { ...taskToUpdate, completed });
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', textAlign: 'center' }}>
      <h1>📋 Task Manager</h1>
      <TaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}

export default App;
