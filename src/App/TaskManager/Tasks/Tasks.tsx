import * as React from 'react';
import { ITask, Task } from './components/Task/Task';
import { connect } from 'react-redux';
import * as Selectors from './selectors/TasksSelectors';
import { ViewDetails } from './../DisplayTask/actions/DisplayTaskActions';

export const Tasks = (props: any) => {
    const {Tasks: tasks, ViewDetailsHandler} = props;
    const boundedHandler = (task: ITask) => () => ViewDetailsHandler(task);
    
    return(
        <div>
            {tasks.map((task: ITask) => 
                <Task {...task} ViewDetailsHandler = { boundedHandler(task) } key={`${task.Task}`} />
            )}
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
         Tasks: Selectors.GetTasks(state)
    }
 }

 const mapDispatchToProps = (dispatch: any) => {
    return {
        ViewDetailsHandler: (task: ITask) => dispatch(ViewDetails({Task: task})),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Tasks);
 