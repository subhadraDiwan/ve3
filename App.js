// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskListPage from './pages/TaskListPage';
import TaskDetailsPage from './pages/TaskDetailsPage';
import AddEditTaskPage from './pages/AddEditTaskPage';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Task Manager</h1>
        <Switch>
          <Route path="C:/Users/shubh/Desktop/VE/my-app/src/pages/TaskListPage.js" exact component={TaskListPage} />
          <Route path="C:/Users/shubh/Desktop/VE/my-app/src/pages/TaskDetailsPage.js/" exact component={TaskDetailsPage} />
          <Route path="C:/Users/shubh/Desktop/VE/my-app/src/pages/AddEditTaskForm.js" exact component={AddEditTaskPage} />

        </Switch>
      </div>
    </Router>
  );
};

export default App;
