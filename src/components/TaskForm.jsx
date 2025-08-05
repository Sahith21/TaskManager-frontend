import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onAdd({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '8px', marginRight: '10px', width: '200px' }}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: '8px', marginRight: '10px', width: '250px' }}
      />
      <button
        type="submit"
        style={{
          padding: '8px 12px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
