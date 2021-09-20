import { put, takeLatest } from "@redux-saga/core/effects";
import { ActionTypeTask } from "../constants/constantsTask";
import * as api from "../../api/apiTask";
import * as actions from '../actions/actionsTask';


function* createTask(task)
{
    const newTask = {taskName: task.payload, status: "Draft"}
    const taskResponse  = yield (api.createTask(newTask));
    if(taskResponse.error)
    {
        yield put(actions.createTaskFailure(taskResponse.error));
    }
    else
    {
        yield put(actions.createTaskSuccess(taskResponse));
    }
}

function* getAllTask()
{
    const taskResponse = yield api.getAllTask();
    if(taskResponse.error)
    {
        yield put(actions.getAllTaskFailure(taskResponse.error));
    }
    else
    {
        yield put(actions.getAllTaskSuccess(taskResponse));
    }
}

function* sagaTask(){
    yield takeLatest(ActionTypeTask.CREATE_TASK_REQUEST, createTask);
    yield takeLatest(ActionTypeTask.GET_ALL_TASK_REQUEST, getAllTask);
}

export default sagaTask;