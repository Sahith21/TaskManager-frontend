import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getTasks = () => axios.get(BASE_URL);
export const addTask = (task) => axios.post(BASE_URL, task);
export const updateTask = (id, updatedTask) => axios.put(`${BASE_URL}/${id}`, updatedTask);
export const deleteTask = (id) => axios.delete(`${BASE_URL}/${id}`);
