import { combineReducers, createStore } from "redux";
import messagesPageReducer from "./messages-page-reducer";
import profilePageReducer from './profile-page-reducer';

let reducers = combineReducers({
    messagesPage: messagesPageReducer,
    profilePage: profilePageReducer,
}); 

let store = createStore (reducers);

export default store; 