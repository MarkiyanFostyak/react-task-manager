import { Input } from 'antd';
import * as React from 'react';
import { Tile } from './../Tile/Tile';
import * as Selectors from './selectors/DisplayTaskSeector';
import { connect } from 'react-redux';

export const DisplayTask = (props: any) => {
    if(!props.Task){
        return (<div></div>)
    }
    const {Task: {Sprint: sprintNumber, Task: title, Comment: comment}} = props;
    return(
        <Tile>
             <div>
                <h4>Task Details:</h4>
                    <Input placeholder="Sprint number" value={sprintNumber} disabled={true}/>
                    <Input placeholder="Task title" value={title} disabled={true} />
                    <Input.TextArea placeholder="Comment" value={comment} disabled={true} autosize={{maxRows:5, minRows:5}} />
                </div>
        </Tile>
    );
}

const mapStateToProps = (state: any)=>{
    return{
        Task: Selectors.SelectTask(state)
    }
}

export default connect(mapStateToProps) (DisplayTask);
