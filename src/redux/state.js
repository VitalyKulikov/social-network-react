
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
        },
    },
    _callSubscriber () {
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
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this.callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this.callSubscriber(this._state);
        }
    },
};


export default store;