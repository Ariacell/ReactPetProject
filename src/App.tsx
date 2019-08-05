import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { NewTaskForm } from './components/NewTaskForm';
import { ITask } from './models/task';
import { TaskList } from './components/TaskList';
import { TaskComponentContainer } from './components/TasksComponentContainer';

import {hot} from 'react-hot-loader';

const App: React.FC<{ initialTasks?: ITask[]}> = ({initialTasks = [{id: 1, name: "First Task",}]}) => {

  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div>
      <h2>React! Something </h2>
      <TaskComponentContainer/>
    </div>
  );
}

export default hot(module)(App);
