const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    postsData: [
        { id: 1, message: `How are you?`, like: 15, },
        { id: 2, message: `It's my first post!`, like: 20, }
    ],
    newPostText:'',
}

const profilePageReducer =  (state = initialState, action) => {

switch (action.type) {
    case ADD_POST:
        let newPost = { id: 5, message: state.newPostText,like: 0 };
        state.postsData.push(newPost);
        state.newPostText = '';
            return state;
    case UPDATE_NEW_POST_TEXT: 
        state.newPostText = action.newText; 
            return state;
        default:
            return state;
    } 
}

export const addPostActionCreator = () => ({type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profilePageReducer; 