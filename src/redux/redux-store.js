import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesPageReducer from "./messages-page-reducer";
import profilePageReducer from './profile-page-reducer';
import usersPageReducer from "./users-page-reducer";
import authReducer from "./auth-reducer";
import thunk from 'redux-thunk';

let reducers = combineReducers({
    messagesPage: messagesPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
}); 

let store = createStore (reducers, applyMiddleware(thunk));
window.store=store;

export default store;