let state = {
    profilePage: {
        postsData: [
            { id: 1, message: `How are you?`, like: 15, },
            { id: 2, message: `It's my first post!`, like: 20, }
        ],
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
            { id: '2', message: 'How are you?' },
            { id: '3', message: 'Im fine.' },
            { id: '4', message: 'My name is Hope.' }
        ],
    },
}

export default state;