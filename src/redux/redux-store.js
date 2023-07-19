import { applyMiddleware, combineReducers, createStore } from 'redux';
import messagesReducer from './messages-reducer';
import profileReducer from './profile-reducer';
import usersPageReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';

let reducers = combineReducers({
  messagesPage: messagesReducer,
  profilePage: profileReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;
