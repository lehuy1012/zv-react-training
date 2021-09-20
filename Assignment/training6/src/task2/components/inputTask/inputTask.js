import React, {useState} from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/actionsTask";
import './inputTask.css';

const InputTask = () => {

    const dispatch = useDispatch();
    const [task, setTask] = useState('');
    const [alert, setAlert] = useState('');
    const handleOnChangeTask = (e) => {
        setTask(e.target.value);
    }

    const handleSubmitTask = () => {
        if(task.length > 0) {

            setAlert("");
            setTask(prevState => prevState = " ");
            dispatch(actions.createTaskRequest(task));
        }
        else
        {
            setAlert("input task should't empty !");
        }
    }
    return (
        <div className="container--input__task">
            <div>
                {alert && alert}
                <input className="input__task" type="text" onChange={(e) => handleOnChangeTask(e)}/>
            </div>
            <button className="btn--submit__Task" onClick={() => handleSubmitTask()}> + Task</button>
        </div>
    );
}

export default InputTask;