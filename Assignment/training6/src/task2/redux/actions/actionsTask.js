import {ActionTypeTask} from '../constants/constantsTask';


// create task
export const createTaskRequest = (task) =>
{
    return {
        type: ActionTypeTask.CREATE_TASK_REQUEST,
        payload: task,
    }
}


export const createTaskSuccess = (payload) => 
{
    return {
        type: ActionTypeTask.CREATE_TASK_SUCCESS,
        payload: payload,
    }
}


export const createTaskFailure = (error) =>
{
    return {
        type: ActionTypeTask.CREATE_TASK_FAILURE,
        error: error,
    }
}

// get all task

export const getAllTaskRequest = () =>
{
    return {
        type: ActionTypeTask.GET_ALL_TASK_REQUEST,
    }
}

export const getAllTaskSuccess = (payload) =>
{
    return {
        type: ActionTypeTask.GET_ALL_TASK_SUCCESS,
        payload: payload,
    }
}


export const getAllTaskFailure = (payload) =>
{
    return {
        type: ActionTypeTask.GET_ALL_TASK_FAILURE,
        payload: payload
    }
}

