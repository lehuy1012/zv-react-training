import { call, put, takeLatest } from "@redux-saga/core/effects";
import * as api from "../../api/apiHome";
import * as actions from "../actions/homeAction";
import {ActionTypeHome} from '../constants/homeConstants';


function* getAllUserRequest() {
    const allUser = yield api.getAllUserApi();
    if(allUser.error)
    {
        yield put(actions.getAllUserFailure(allUser.error));
    }
    else
    {
        yield put(actions.getAllUserSuccess(allUser));
    }
}


function* getMyInfoRequest() {
    const allUser = yield api.getMyInfoApi();
    if(allUser.error)
    {
        yield put(actions.getMyInfoFailure(allUser.error));
    }
    else
    {
        yield put(actions.getMyInfoSuccess(allUser));
    }
}


function* homeSaga() {
   yield takeLatest(ActionTypeHome.GET_ALL_USER_REQUEST, getAllUserRequest);
   yield takeLatest(ActionTypeHome.GET_MY_INFO_REQUEST, getMyInfoRequest);
}

export default homeSaga;