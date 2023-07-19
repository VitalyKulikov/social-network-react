import {profileAPI} from '../api/api';

const ADD_POST = 'ADD_POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        {id: 1, message: `How are you?`, like: 15},
        {id: 2, message: `It's my first post!`, like: 20},
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 8,
                message: action.newPostText,
                like: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost,
                ],
            };
        }
        case SET_USERS_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({
    type: ADD_POST,
    newPostText,
});
export const setUsersProfile = (profile) => ({
    type: SET_USERS_PROFILE,
    profile,
});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUsersProfile = (userid) => async (dispatch) => {
    let response = await profileAPI.getProfile(userid)
    dispatch(setUsersProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export default profileReducer;
