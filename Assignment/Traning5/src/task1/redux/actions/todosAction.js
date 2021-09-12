import { ActionTypes } from "../contants/actions-type";


export const getTodos = () => {
    return {
        type: ActionTypes.GET_TODOS,
    };
};

export const getTodoSuccess = (payload) => {
    return {
        type: ActionTypes.GET_TODO_SUCCESS,
        payload: payload,
    };
};


export const getTodoFailure = (payload) => {
    return {
        type: ActionTypes.GET_TODO_FAILURE,
        payload: payload,
    };
};


export const createTodo = (todo) => {
    return {
        type: ActionTypes.CREATE_TODO,
        payload: todo,
    };
};

export const toggleTodo = (id) => {

    return{
        type: ActionTypes.TOGGLE_TODO,
        payload: id
    };
}

export const deleteTodo = (id) => {
    return {
        type: ActionTypes.DELETE_TODO,
        payload: id
    }
}

export const filterDone = () => {
    return {
        type: ActionTypes.FILTER_DONE,
    }
}