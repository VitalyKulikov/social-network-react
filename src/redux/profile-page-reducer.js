import { userAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
    postsData: [
        { id: 1, message: `How are you?`, like: 15, },
        { id: 2, message: `It's my first post!`, like: 20, }
    ],
    newPostText:'',
    profile: null,
}

const profilePageReducer =  (state = initialState, action) => {

switch (action.type) {
    case ADD_POST:
        let newPost = { id: 5, message: state.newPostText,like: 0 };
        return {...state, postsData: [...state.postsData,newPost], newPostText: ''}
    case UPDATE_NEW_POST_TEXT: {
        return {...state, newPostText: action.newText}}
    case SET_USERS_PROFILE: {
            return {...state, profile: action.profile}}
        default:
            return state;
    } 
}

export const addPostActionCreator = () => ({type: ADD_POST });
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});

export const getUsersProfile = (userid) => 
(dispatch)=>{
    userAPI.getProfile(userid).then(response => {
        dispatch(setUsersProfile(response.data)); 
    });
}

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profilePageReducer;