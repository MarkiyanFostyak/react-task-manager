import { createReducer } from "redux-act";
import { ViewDetails } from "./../actions/DisplayTaskActions";

const InitialState = {
    Task: null
}

export const DisplayTaskReducer = createReducer({
    [<any>ViewDetails]: (initialState, payload) =>{
        const {Task: task} = payload;
        return{Task: {...task}};
    }
}, InitialState)