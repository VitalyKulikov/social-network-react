import { combineReducers, createStore } from "redux";
import messagesPageReducer from "./messages-page-reducer";
import profilePageReducer from './profile-page-reducer';
import usersPageReducer from "./users-page-reducer";

let reducers = combineReducers({
    messagesPage: messagesPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
}); 

let store = createStore (reducers);
window.store=store;

export default store; 