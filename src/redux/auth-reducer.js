import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  data:
  {
    email: null,
    login: null,
    id: null,
    isAuth: false,
  }
}

const authReducer =  (state = initialState, action) => {
  switch (action.type) {
  case SET_USER_DATA:
    return {
      ...state,
      ...action.payload
    }
  default:
    return state;
  } 
}


export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA, 
  payload:{
    id, 
    email, 
    login, 
    isAuth
  }
});

export const getAuthUserData = () =>(dispatch) => {
  authAPI.me().then(response => {
    if(response.data.resultCode === 0){
      let{id, email, login}=response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => { 
  authAPI.login(email, password, rememberMe, true).then(response => {
    if(response.data.resultCode === 0){
      dispatch(setAuthUserData());
    }
  });
}; 

export const logout = () =>(dispatch) => {
  authAPI.logout().then(response => {
    if(response.data.resultCode === 0){
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
}; 

export default authReducer;