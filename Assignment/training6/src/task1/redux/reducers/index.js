import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { homeReducer } from "./homeReducer";

const reducers = combineReducers({
    loginInfo: loginReducer,
    users: homeReducer,
});

export default reducers;