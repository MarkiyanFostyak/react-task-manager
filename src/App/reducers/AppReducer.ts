import { DisplayTaskReducer } from './../TaskManager/DisplayTask/reducers/DisplayTaskReducer';
import { combineReducers } from 'redux';
import { CreateTaskReducer } from './../TaskManager/CreateTask/reducers/CreaateTaskReducer';
import { TaskListReducer } from './../TaskManager/Tasks/reducers/TaskListReducer';

const AppReducer = combineReducers({
    Tasks: TaskListReducer,
    DisplayTask: DisplayTaskReducer,
    CreateTask: CreateTaskReducer 
});

export default AppReducer;