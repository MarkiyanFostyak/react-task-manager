export const GetTitle = (state: any): string => {
    const {CreateTask : {Title: title}} = state;
    return title;
}

export const GetComment = (state: any): string => {
    const {CreateTask : {Comment: comment}} = state;
    return comment;
}