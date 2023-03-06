const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

const messagesPageReduser =  (state, action) => {

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
 
export default messagesPageReduser;
 