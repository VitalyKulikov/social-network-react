const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profilePageReduser =  (state, action) => {

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

export default profilePageReduser; 