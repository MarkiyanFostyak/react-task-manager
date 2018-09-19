import 'antd/dist/antd.css';
import * as React from 'react';
import styles from './App.module.scss';
import TaskManager from './TaskManager/TaskManager';

class App extends React.Component {
  public render() {
    return (
      <div className={styles.App}>
        <TaskManager/>
      </div>
    );
  }
}

export default App;
