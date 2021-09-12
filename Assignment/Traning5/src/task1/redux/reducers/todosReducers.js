import { getAllTodoApi } from "../../api/todosApi";
import { ActionTypes } from "../contants/actions-type";

const initialState = {
    listTodo:[],
};

export const todoReducer = (state  = initialState, {type, payload}) => {

    switch(type)
    {
        case ActionTypes.GET_TODOS:
            return {listTodo: payload};
        
        case ActionTypes.GET_TODO_SUCCESS:
            return {listTodo: payload};

        case ActionTypes.CREATE_TODO:
            return {listTodo:[...state.listTodo, payload]};

        case ActionTypes.TOGGLE_TODO:
            const idMakeDone = payload;
            let newListTodo = [...state.listTodo];
            const findTodo = newListTodo.filter((todo) => {return todo.id === idMakeDone});
            const newListTodoUpdate = newListTodo.map(
            (todo) => {
                if(todo.id == findTodo[0].id)
                {
                    todo.makeDone = true;
                }
                return todo;
            })
            return {listTodo:newListTodoUpdate};

        case ActionTypes.DELETE_TODO:
            const idDelete = payload;
            let listDelete = [...state.listTodo];
            listDelete.splice(idDelete - 1, 1);
            return {listTodo:listDelete};

        case ActionTypes.FILTER_DONE:
            let listFilterDone = [];
            for (let i = 0; i < state.listTodo.length; i++)
            {
                if(state.listTodo[i].makeDone === true) 
                {
                    listFilterDone.push(state.listTodo[i]);
                }
            }
            return {listTodo: listFilterDone};

        default:
            return state;
    }
}