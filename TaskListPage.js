// src/pages/TaskListPage.js

import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import { getAllTasks, deleteTask } from '../api/tasks';

const TaskListPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks().then(data => setTasks(data));
  }, []);

  const handleDelete = (id) => {
    deleteTask(id).then(() => {
      setTasks(tasks.filter(task => task.id !== id));
    });
  };

  return <TaskList tasks={tasks} onDelete={handleDelete} />;
};

export default TaskListPage;
