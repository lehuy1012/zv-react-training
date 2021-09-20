import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as api from "../../api/apiUser";
import * as actions from "../actions/loginAction";
import {ActionTypeLogin} from "../constants/loginConstants";



function* loginRequest(action) {

    const loginRequest = yield (api.loginRequest(action.payload));

    if(loginRequest.token) {
        yield put(actions.loginSuccessAction(loginRequest.token));
    }
    else{
        yield put(actions.loginFailureAction(loginRequest.error));
    }
}

function* loginSaga() {
    yield takeEvery(ActionTypeLogin.HANDLE_LOGIN , loginRequest);
}

export default loginSaga;