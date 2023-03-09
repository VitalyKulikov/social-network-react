const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = { 
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
}

const messagesPageReducer =  (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body;
                return state;
        case SEND_MESSAGE:
            let body = state.newMessageText;
            state.newMessageText = '';
            state.messagesData.push({ id: '1', message: body });
                return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextCreator = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body }); 
 
export default messagesPageReducer;
 