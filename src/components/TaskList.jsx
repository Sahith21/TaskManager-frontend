import React from 'react';

const TaskList = ({ tasks, onToggle, onDelete }) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            margin: '10px 0',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: task.completed ? '#d4edda' : '#f8d7da',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => onToggle(task.id, !task.completed)}
          >
            {task.title}
          </span>
          <button
            onClick={() => onDelete(task.id)}
            style={{
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
