import { ActionTypeLogin } from "../constants/loginConstants"


export const handleLoginAction = (user)=>{
    return {
        type: ActionTypeLogin.HANDLE_LOGIN,
        payload: user    
    }
}


export const loginRequestAction = (user)=>{
    return {
        type: ActionTypeLogin.LOGIN_REQUEST,
        payload: user    
    }
}

export const loginSuccessAction = (token)=>{
    return {
        type: ActionTypeLogin.LOGIN_SUCCESS,
        payload: token 
    }
}

export const loginFailureAction = (error)=>{
    return {
        type: ActionTypeLogin.LOGIN_FAILURE,
        payload: error  
    }
}

