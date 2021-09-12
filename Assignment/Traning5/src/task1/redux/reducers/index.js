import { combineReducers } from "redux";
import { todoReducer } from "./todosReducers";

const reducers = combineReducers({
    Todos: todoReducer,

});

export default reducers;