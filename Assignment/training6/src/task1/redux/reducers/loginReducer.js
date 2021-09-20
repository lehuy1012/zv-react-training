import {ActionTypeLogin} from '../constants/loginConstants';

const initialState = {
    email: '',
    error: '',
    token: ''
}

export const loginReducer = (state = initialState, {type, payload}) => {
    switch(type)
    {   
        case ActionTypeLogin.LOGIN_REQUEST:
            return {...state};   
        case ActionTypeLogin.LOGIN_SUCCESS:
            localStorage.setItem('token', payload)
            return {token: payload};

        case ActionTypeLogin.LOGIN_FAILURE:
            return {error: payload};

        default:
            return state;
    }
}