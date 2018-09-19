import { createAction } from "redux-act";
import { ITask } from "./../components/Task/Task";

export const AddTask = createAction("Create Task", payload=>payload);

export const AddTaskAsync  = (payload: any) => {
    return (dispatch: any) => {
        return createTask(payload.Task).then((task: ITask)=>{
            dispatch(AddTask(payload));
        })
    }
}

const createTask = async (task: ITask) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(task)
        }, 1000);
    });
}

createAction("Add task", payload=>payload);