import React from 'react';
import { ActionTypes } from '../contants/loginContants';

const initialState = {
    email: '',
}

export const loginReducer = (state = initialState, {type, payload}) => {


    switch(type)
    {
        case ActionTypes.LOGIN_SUCCESS:
        // i don't get api check this user so i'm set this userId is 1
            localStorage.setItem('userID', '1')
            return {email: localStorage.setItem('token', payload.email)};

        default:
            return state;
    }
}