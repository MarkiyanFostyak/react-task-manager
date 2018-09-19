import { createAction } from "redux-act";

export const ChangeTitle = createAction("Change task title", payload => payload);
export const ChangeComment = createAction("Change task comment", payload => payload);