import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";

const reducers = combineReducers({
    loginInfo: loginReducer
});

export default reducers;