import {combineReducers} from 'redux';
import {taskReducer} from './reducerTask';

const reducers = combineReducers ({
    Tasks: taskReducer,
})

export default reducers;