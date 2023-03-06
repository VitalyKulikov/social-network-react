const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'


let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: `How are you?`, like: 15, },
                { id: 2, message: `It's my first post!`, like: 20, }
            ],
            newPostText:'',
        },
    
        messagesPage: { 
            dialogsData: [
                { id: '1', name: 'Mihail' },
                { id: '2', name: 'Andrey' },
                { id: '3', name: 'Alex' },
                { id: '4', name: 'Victor' },
                { id: '5', name: 'Ivan' },
                { id: '6', name: 'Roman' },
                { id: '7', name: 'Nikolai' },
                { id: '8', name: 'Nadezhda' }
            ],
    
            messagesData: [
                { id: '1', message: 'Hello' },
            ],
            newMessageText:'',
        },
    },
    callSubscriber () {
        console.log('state is changed'); 
    },
    getState () {
        return this._state;
    },
    subscribe (observer) {
        this.callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = { id: 5, message: this._state.profilePage.newPostText,like: 0 };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this.callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this.callSubscriber(this._state);
        } else if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
            this._state.messagesPage.newMessageText = action.body;
            this.callSubscriber(this._state);
        } else if (action.type === 'SEND_MESSAGE') {
            let body = this._state.messagesPage.newMessageText;
            this._state.messagesPage.newMessageText = '';
            this._state.messagesPage.messagesData.push({ id: '1', message: body });
            this.callSubscriber(this._state);
      }  
    }, 
};
  
export const addPostActionCreator = () => ({type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextCreator = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body }); 

export default store;