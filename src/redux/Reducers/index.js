import { combineReducers } from "redux";
import { loginReducer } from './loginReducer';
import { postReducer } from './postReducer';

export const reducers=combineReducers({
    login:loginReducer,
    posts:postReducer
})