import { ActionTypes } from "../contants/loginContants"


export const LoginAction = (loginSuccess) => {

    console.log('tạo action');
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: loginSuccess,
    };
}