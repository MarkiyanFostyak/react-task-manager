import { Button, Input} from 'antd';
import * as React from 'react';
import { ITask } from './../Tasks/components/Task/Task';
import { Tile } from './../Tile/Tile';
import styles from './CreateTask.module.scss';
import * as CreateTaskActions from './actions/CreateTaskActions';
import { connect } from 'react-redux';
import * as Selectors from './selectors/CreateTaskSelectors'
import { AddTaskAsync } from './../Tasks/actions/TasksListActions';
import { bindActionCreators } from '../../../../node_modules/redux';

interface ICreateTaskProps extends ITask{
    SprintNumber: number;
    onTaskTitleInput: (title: string) => void,
    onTaskCommentInput: (title: string) => void,
    addTask: (task: ITask) => void
}

class CreateTask extends React.Component<any>{
    constructor(props: ICreateTaskProps) {
        super(props);
    }
    public render(){
        const { SprintNumber: sprintNumber } = this.props;
        return(
            <Tile>
                <div>
                    <h4>Add new task:</h4>
                    <Input placeholder="Sprint number" value={sprintNumber} disabled = {true} />
                    <Input placeholder="Task title" onChange = {this.onTaskTitleInput} />
                    <Input.TextArea placeholder="Comment" onChange = {this.onTaskCommentInput} autosize={{maxRows:5, minRows:5}}/>
                    <div className={styles.buttonContainer}>
                        <Button type="primary" onClick={this.addTask}>Add</Button>
                    </div>
                </div>
            </Tile>
        );
    }

    private addTask = ()=>{
        const { SprintNumber: sprintNumber, AddTaskAsync, Title: taskTitle, Comment } = this.props;
        AddTaskAsync({Task: { Sprint: sprintNumber, Task: taskTitle, Comment}});
    }

    private onTaskTitleInput = (e: React.ChangeEvent<HTMLInputElement>):void => {
        const { target: { value } } = e;
        const {ChangeTitle: handler} = this.props;
        handler({Title: value});
    }

    private onTaskCommentInput = (e: React.ChangeEvent<HTMLTextAreaElement>):void => {
        const { target: { value } } = e;
        const {ChangeComment: handler} = this.props;
        handler({Comment: value});
    }
}

const mapStateToProps = (state: any) => {
   return {
        Title: Selectors.GetTitle(state),
        Comment: Selectors.GetComment(state)
   }
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators({...CreateTaskActions, AddTaskAsync }, dispatch);

// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         onTaskTitleInput: (title: string) => dispatch(ChangeTitle({Title: title})),
//         onTaskCommentInput: (comment: string) => dispatch(ChangeComment({Comment: comment})),
//         addTask: (task: ITask) => dispatch(AddTask({Task: task}))
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);