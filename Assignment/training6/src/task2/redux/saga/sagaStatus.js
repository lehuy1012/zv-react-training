import React, { useState, useDispatch } from 'react';
import { put, takeLatest } from '@redux-saga/core/effects';
import { ActionTypeStatus } from '../constants/constantsStatus';
import * as api from '../../api/apiTask';
import * as actions from "../actions/actionStatus";


let queue = [];

function* updateStatusRequest(action){

    queue.push(action.payload);
    
    if(navigator.onLine)
    {
        const updateReady = {id : action.payload, status : "Ready"}
        yield put(actions.updateStatusSuccess(updateReady));

        console.log('check queue ', queue);

     
        while(queue.length > 0){

            console.log('check queue in while ', queue);
            const curId = queue[0];
            
            const updateSubmit = {id: curId, status: "Submitting"};
            const updateError = {id : curId, status : "Error"}
            const updateSuccess = {id : 100, status : "Success"}
            
            yield put(actions.updateStatusSuccess(updateSubmit));

            try {
                const resUpdate = yield api.updateStatus(updateSuccess);
                yield put(actions.updateStatusSuccess(updateSubmit));
            }
            catch
            {
                console.log('check update error ');
                yield put(actions.updateStatusFailure(updateError));
            } 
            queue.splice(0,1);
        }
    }
    else
    {
        const updatePending = {id : action.payload, status : "Pending"}
        yield put(actions.updateStatusSuccess(updatePending));
    }
}


function* sagaStatus(){
    yield takeLatest(ActionTypeStatus.UPDATE_STATUS_REQUEST, updateStatusRequest);
}

export default sagaStatus;