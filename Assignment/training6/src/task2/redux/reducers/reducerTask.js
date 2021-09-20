import {ActionTypeTask} from '../constants/constantsTask';
import {ActionTypeStatus} from '../constants/constantsStatus';

const initialState = { 
    listTask: [],
    error: ''
}

export const taskReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypeTask.CREATE_TASK_SUCCESS:
            const newListTask = [...state.listTask, payload];
            return {listTask: newListTask};

        case ActionTypeTask.CREATE_TASK_FAILURE:
            return {error: payload};

        case ActionTypeTask.GET_ALL_TASK_SUCCESS:
            return {listTask: payload};

        case ActionTypeTask.GET_ALL_TASK_FAILURE:
            return {error: payload};

        case ActionTypeStatus.UPDATE_STATUS_SUCCESS:
            const updateSuccess = state.listTask;
            const newListSuccess = updateSuccess.map((task) => {
                if(task.id === payload.id)
                {
                    task.status = payload.status;
                }
                return task;  
            })
            return {listTask: newListSuccess};
            
        case ActionTypeStatus.UPDATE_STATUS_FAILURE:
            console.log("update failure in reducer : ", payload);
            const updateFailure = state.listTask;
            const newListFailure = updateFailure.map((task) => {
                if(task.id === payload.id)
                {
                    task.status = payload.status;
                }
                return task;  
            })
            return {listTask: newListFailure};

        default: 
            return state;
    }
}