import {ActionTypeHome} from '../constants/homeConstants';

const initialState = {
    listUser: []
}

export const homeReducer = (state = initialState, {type, payload}) => {
    switch(type)
    {      
        case ActionTypeHome.GET_ALL_USER_SUCCESS:
            return {listUser: payload};

        case ActionTypeHome.GET_ALL_USER_FAILURE:
            return {error: payload};
        
        case ActionTypeHome.GET_MY_INFO_SUCCESS:
            return {myInfo: payload};
    
        case ActionTypeHome.GET_MY_INFO_FAILURE:
            return {error: payload};

        default:
            return state;
    }
}