import {Col, Row} from "antd";
import * as React from "react";
import CreateTask from "./CreateTask/CreateTaskComponent";
import DisplayTask from "./DisplayTask/DisplayTask";
import { ITask } from "./Tasks/components/Task/Task";
import Tasks from "./Tasks/Tasks";

interface ITaskManagerState {
    Tasks: ITask[];
    TaskDetails: ITask | null;
}

class TaskManager extends React.Component<any, ITaskManagerState> {
    constructor(props: any) {
        super(props);
        this.state = {  
            TaskDetails: null,
            Tasks: new Array<ITask>(),
        }
    }

    public render (){
        return (<div>
            <Row gutter={16}>
                <Col span={12}> 
                    <Tasks />
                </Col>
                <Col span={12}>
                    <CreateTask SprintNumber={5}/>
                    <DisplayTask />
                </Col>  
            </Row>
        </div>)
    }
}

export default TaskManager;