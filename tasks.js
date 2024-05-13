// src/api/tasks.js

let tasks = [
    { id: 1, title: "Task 1", description: "Description 1" },
    { id: 2, title: "Task 2", description: "Description 2" },
    { id: 3, title: "Task 3", description: "Description 3" }
  ];
  
  export const getAllTasks = () => {
    return Promise.resolve(tasks);
  };
  
  export const getTaskById = (id) => {
    return Promise.resolve(tasks.find(task => task.id === id));
  };
  
  export const addTask = (task) => {
    const newTask = { ...task, id: tasks.length + 1 };
    tasks.push(newTask);
    return Promise.resolve(newTask);
  };
  
  export const updateTask = (id, updatedTask) => {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      tasks[index] = { ...tasks[index], ...updatedTask };
      return Promise.resolve(tasks[index]);
    }
    return Promise.reject(new Error("Task not found"));
  };
  
  export const deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    return Promise.resolve();
  };
  