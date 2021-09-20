import { ActionTypeHome } from "../constants/homeConstants";

export const getAllUserRequest = () =>
{
    return {
        type: ActionTypeHome.GET_ALL_USER_REQUEST,
    }
}

export const getAllUserSuccess = (payload) =>
{
    return {
        type: ActionTypeHome.GET_ALL_USER_SUCCESS,
        payload: payload,
    }
}

export const getAllUserFailure = (error) =>
{
    return {
        type: ActionTypeHome.GET_ALL_USER_FAILURE,
        error: error,
    }
}

export const getMyInfoRequest = () =>
{
    return {
        type: ActionTypeHome.GET_MY_INFO_REQUEST,
    }
}

export const getMyInfoSuccess = (payload) =>
{
    return {
        type: ActionTypeHome.GET_MY_INFO_SUCCESS,
        payload: payload,
    }
}

export const getMyInfoFailure = (error) =>
{
    return {
        type: ActionTypeHome.GET_MY_INFO_FAILURE,
        error: error,
    }
}