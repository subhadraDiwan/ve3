// src/components/TaskDetails.js

import React from 'react';

const TaskDetails = ({ task }) => {
  return (
    <div>
      <h2>Task Details</h2>
      <p>Title: {task.title}</p>
      <p>Description: {task.description}</p>
    </div>
  );
};

export default TaskDetails;
