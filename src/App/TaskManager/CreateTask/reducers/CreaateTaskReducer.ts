import {createReducer} from 'redux-act';
import { ChangeTitle, ChangeComment } from 'App/TaskManager/CreateTask/actions/CreateTaskActions';
const initialState = {
    Title: "",
    Comment: ""
}
export const CreateTaskReducer = createReducer({
    [<any>ChangeTitle]: (initialState, payload) => ({...initialState, Title: payload.Title}),
    [<any>ChangeComment]: (initialState, payload) => {
        return {...initialState, Comment: payload.Comment};
    }
}, initialState);