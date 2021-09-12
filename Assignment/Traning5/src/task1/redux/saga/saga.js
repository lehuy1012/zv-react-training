import {takeLatest, call, put, takeEvery} from "redux-saga/effects";
import { ActionTypes } from "../contants/actions-type";
import * as actions from "../actions/todosAction";
import * as api from "../../api/todosApi";


function* getTodoSaga(action) {
    
    try {
        const todos = yield call(api.getAllTodoApi);
        yield put(actions.getTodoSuccess(todos));

    } catch (e) {
        yield put(actions.getTodoFailure(e));
    }


   
}


function* mySaga(){
    yield takeEvery(ActionTypes.GET_TODOS, getTodoSaga);
}

export default mySaga;