import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/actionStatus";
import './task.css';

const Task = (Props) => {
    const dispatch = useDispatch();
    const task = Props.task;

    const handleStatus = () => {
        if(task.status === 'Draft')
        {
            dispatch(actions.updateStatusRequest(task.id));
        }
        if(task.status === 'Error')
        {
            const updateError = {id : task.id, status: 'Submitting'}
            dispatch(actions.updateStatusRequest(task.id));
        }
    }

    return (
        <div className="container--item__task">
            <h4 className="item__task">{task.taskName}</h4>
            <button value={task.id} onClick={(e) => handleStatus(e)}>{task.status}</button>
        </div>
    );
}

export default Task;