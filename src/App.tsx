import React from 'react';
import './App.css';
import { ITask } from './models/task';
import { TaskComponentContainer } from './components/TasksComponentContainer';

import {hot} from 'react-hot-loader';
import OMDBSearchComponentContainer from './components/OMDBSearch/OMDBSearchContainer';

const App: React.FC<{ initialTasks?: ITask[]}> = ({initialTasks = [{id: 1, name: "First Task",}]}) => {

  // const [] = useState(initialTasks);

  return (
    <div >
      <h2>React!</h2>
      <TaskComponentContainer/>
      <OMDBSearchComponentContainer/>
    </div>
  );
}

export default hot(module)(App);
