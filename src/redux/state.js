import messagesPageReduser from "./messages-page-reduser";
import profilePageReduser from "./profile-page-reduser";

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

        this._state.profilePage = profilePageReduser(this._state.profilePage, action );
        this._state.messagesPage =  messagesPageReduser(this._state.messagesPage, action)
        this.callSubscriber(this._state); 
    }, 
};

export default store;