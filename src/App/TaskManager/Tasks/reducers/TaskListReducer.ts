import { createReducer } from "redux-act";
import { ITask } from "./../components/Task/Task";
import { AddTask } from "./../actions/TasksListActions";

const InitialState = {
    Tasks: new Array<ITask>()
}

export const TaskListReducer = createReducer({
    [<any>AddTask]: (initialState, payload) =>{
        const {Task: task} = payload;
        return{Tasks: [...initialState.Tasks, task]};
    }
}, InitialState)