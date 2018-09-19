import * as React from 'react';
import { Button } from 'antd';
import { Tile } from './../../../Tile/Tile';

export interface ITask {
    Sprint: number;
    Task: string;
    Comment: string;
}

export interface ITaskProps extends  ITask {
    ViewDetailsHandler: () => void
}

export const Task = (props: ITaskProps) => {
    const{Sprint, Task: task, ViewDetailsHandler} = props;
    return(
        <Tile>
            <div>
                <b>Sprint:</b> {Sprint}
            </div>
            <div>
                <b>Task:</b> {task}
            </div>
            <div>
                <Button onClick={ViewDetailsHandler}>Details</Button>
            </div>
        </Tile>
    );
}