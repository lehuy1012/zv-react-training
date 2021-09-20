import {ActionTypeStatus} from '../constants/constantsStatus';

export const updateStatusRequest = (payload) => {
    return {
        type: ActionTypeStatus.UPDATE_STATUS_REQUEST,
        payload: payload,
    }
}

export const updateStatusSuccess = (payload) => {
    return {
        type: ActionTypeStatus.UPDATE_STATUS_SUCCESS,
        payload: payload
    }
}

export const updateStatusFailure = (payload) => {
    return {
        type: ActionTypeStatus.UPDATE_STATUS_FAILURE,
        payload: payload
    }
}