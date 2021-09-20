import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../redux/actions/actionsTask';
import Task from './task';
import './listTask.css';


const ListTask = () => {

    const listTask = useSelector((state) => state.Tasks.listTask);
    if(listTask)
    {
        return (
            <div className="container--list__task">
               
                {listTask.map((task) => { return <Task key={task.id} task = {task} />})}
            
            </div>
        );
    }
    else
    {
        return null;
    }
}

export default ListTask;